---
id: solidity
title: "Solidity Documentation"
description: Solidity Documentation for developers to run queries on Themis Testnet
---

## Installing Dependencies

You can install our [Solidity SDK](https://github.com/Lagrange-Labs/lagrange-lpn-contracts) via [foundry](https://github.com/foundry-rs/foundry)

```solidity
forge install lagrange-labs/lagrange-lpn-contracts
forge remappings > remappings.txt
```

## Register Storage Variables of Smart Contracts as SQL Tables

Permission to begin table registration is coming soon via our Web UI. Currently, you can complete this step by [filling out this form](https://docs.google.com/forms/d/e/1FAIpQLScg11zjGKiHrxlzT8fTUDtQmzpI2OFIHtlrSKVFnvvQV_XnJA/viewform). 

This step allows you to register the relevant contract that you would like Lagrange to index. After a contract is indexed, one can register and execute SQL queries on the historical data of this contract. 

## Register Queries as SQL SELECT Statements

You can [register queries using our Web UI](https://app.lagrange.dev/zk-coprocessor/register-query)

## Querying the database

After registering a table, Lagrange's proving network will starting indexing and proving the associated storage slots. This allows you to query over the registered tables in our verifiable database from your smart contract.

For Testnet Themis, we will support a subset of SQL expressions. Specifically, we focus on computing SELECT statements over historical data.

```solidity
    function query() private returns (uint256) {
        bytes32[] memory placeholders = new bytes32[](1);
        placeholders[0] = bytes32(bytes20(msg.sender));

        return lpnRegistry.request{value: lpnRegistry.gasFee()}(
            YOUR_REGISTERED_QUERY_HASH,
            placeholders,
            L1BlockNumber(),
            L1BlockNumber()
        );
    }
```

## Receiving the result

The dapp contract should satisfy an interface to receive the reply:

```solidity
abstract contract LPNClientV1 is ILPNClientV1 {
    /// @notice Callback function called by the LPNRegistry contract.
    /// @param requestId The ID of the request.
    /// @param results The result of the request.
    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        virtual;
}
```

## Barebones Snippet

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {LPNClientV1} from "lagrange-lpn-contracts/src/v1/client/LPNClientV1.sol";
import {ILPNRegistryV1} from
    "lagrange-lpn-contracts/src/v1/interfaces/ILPNRegistryV1.sol";
import {L1BlockNumber} from "lagrange-lpn-contracts/src/utils/L1Block.sol";
import {QueryOutput} from
    "lagrange-lpn-contracts/src/v1/Groth16VerifierExtensions.sol";

contract YourContract is LPNClientV1 {
    // Include the query hash obtained from registering your query
    // This can be a constant, a storage variable, or passed in via calldata
    bytes32 public constant YOUR_QUERY_HASH =
        0x1231231231231231231231231231231231231231231231231231231231231231

    struct YourExpectedRow {
        uint256 someColumnName;
    }

    mapping(uint256 requestId => bool contextForCallback) public requests;

    constructor(ILPNRegistryV1 lpnRegistry_) {
        LPNClientV1._initialize(lpnRegistry_);
    }

    function query() external {
        // In this case, we assume a query with one placeholder `$1` where the value is some address.
        // Modify this to match your query.
        bytes32[] memory placeholders = new bytes32[](1);
        placeholders[0] = bytes32(bytes20(msg.sender));

        uint256 requestId = lpnRegistry.request{value: lpnRegistry.gasFee()}(
            YOUR_QUERY_HASH, placeholders, L1BlockNumber(), L1BlockNumber()
        );

        requests[requestId] = true;
    }

    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        bool context = requests[requestId];

        uint256 someResult;
        for (uint256 i = 0; i < result.rows.length; i++) {
            YourExpectedRow memory row =
                abi.decode(result.rows[i], (YourExpectedRow));

            // Do something with the values in your result
            if (context) {
                someResult = row.someColumnName + 1;
            }
        }

        delete requests[requestId];
    }
}
```

## Complete example

Refer below for a complete implementation of a ZK Coprocessor client:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {LPNClientV1} from "lagrange-lpn-contracts/src/v1/client/LPNClientV1.sol";
import {ILPNRegistryV1} from "lagrange-lpn-contracts/src/v1/interfaces/ILPNRegistryV1.sol";
import {QueryOutput} from "lagrange-lpn-contracts/src/v1/Groth16VerifierExtensions.sol";
import {Initializable} from
    "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @title LPNQueryV1
 * @dev A contract for submitting queries to the Lagrange ZK Coprocessor 1.0
 */
contract LPNQueryV1 is LPNClientV1, Initializable {
    /**
     * @dev Struct to store metadata about a query request.
     * @param sender The address that sent the query request.
     * @param queryHash The hash of the query sent. Uniquely identifies a query over a particular table.
     * @param placeholders An array of placeholder values for the query.
     */
    struct RequestMetadata {
        address sender;
        bytes32 queryHash;
        bytes32[] placeholders;
    }

    /**
     * @dev Mapping to store request metadata by request ID.
     */
    mapping(uint256 requestId => RequestMetadata request) public requests;

    /**
     * @dev Event emitted when a query request is made.
     * @param sender The address that sent the query request.
     * @param queryHash The hash of the query being made.
     * @param placeholders An array of placeholder values for the query.
     */
    event Query(
        address indexed sender,
        bytes32 indexed queryHash,
        bytes32[] placeholders
    );

    /**
     * @dev Event emitted when the result of a query is received.
     * @param requestId The ID of the query request.
     * @param sender The address that sent the query request.
     * @param result The output of the query.
     */
    event Result(
        uint256 indexed requestId, address indexed sender, QueryOutput result
    );

    /**
     * @dev Initializer for the LPNQueryV1 contract.
     * @param _lpnRegistry The address of the LPN registry contract.
     */
    function initialize(ILPNRegistryV1 _lpnRegistry) external initializer {
        LPNClientV1._initialize(_lpnRegistry);
    }

    /**
     * @dev Function to submit a query to the Lagrange ZK Coprocessor.
     * @param queryHash The hash of the query to be executed.
     * @param placeholders An array of placeholder values for the query.
     * @param startBlock The starting block number for the query range.
     * @param endBlock The ending block number for the query range.
     */
    function query(
        bytes32 queryHash,
        bytes32[] calldata placeholders,
        uint256 startBlock,
        uint256 endBlock
    ) external payable {
        uint256 requestId = lpnRegistry.request{value: lpnRegistry.gasFee()}(
            queryHash, placeholders, startBlock, endBlock
        );

        requests[requestId] = RequestMetadata({
            sender: msg.sender,
            queryHash: queryHash,
            placeholders: placeholders
        });

        emit Query(msg.sender, queryHash, placeholders);
    }

    /**
     * @dev Internal function called by LPNClientV1 to provide the result of a query.
     * @param requestId The ID of the query request.
     * @param result The output of the query.
     */
    function processCallback(uint256 requestId, QueryOutput memory result)
        internal
        override
    {
        RequestMetadata memory req = requests[requestId];
        emit Result(requestId, req.sender, result);
        delete requests[requestId];
    }
}
```
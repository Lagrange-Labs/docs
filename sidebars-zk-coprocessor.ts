import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      label: "Overview of ZK Coprocessor and Verifiable Database",
      id: "overview",
    },
    {
      type: "doc",
      label: "Quickstart",
      id: "quickstart",
    },
    {
      type: "category",
      label: "Verifable Database Architecture",
      link: { type: "doc", id: "verifiable-database-architecture/overview" },
      items: [
        {
          type: "doc",
          id: "verifiable-database-architecture/onchain-storage",
          label: "Onchain's Storage",
        },
        {
          type: "doc",
          id: "verifiable-database-architecture/storage-database",
          label: "Storage Database",
        },
        {
          type: "doc",
          id: "verifiable-database-architecture/state-database",
          label: "State Database",
        },
        {
          type: "doc",
          id: "verifiable-database-architecture/block-database",
          label: "Block Database",
        },
      ],
    },
    {
      type: "category",
      label: "zkMapReduce",
      link: {
        type: "generated-index",
        title: "zkMapReduce",
        description:
          "The core aspect of Lagrange's network is to run computations in a distributed fashion a-la MapReduce. The next subsections go into more details.",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "zkMapReduce/primer",
          label: "Primer on MapReduce",
        },
        {
          type: "doc",
          id: "zkMapReduce/zkmr",
          label: "zkMapReduce (zkMR)",
        },
        {
          type: "doc",
          id: "zkMapReduce/efficiency-improvements",
          label: "Efficiency Improvements of ZKMR",
        },
      ],
    },
    {
      type: "category",
      label: "Euclid Testnet Developer Docs",
      link: { type: "doc", id: "euclid-testnet/overview" },
      items: [
        {
          type: "doc",
          id: "euclid-testnet/solidity",
          label: "Solidity Documentation",
        },
        {
          type: "doc",
          id: "euclid-testnet/example-pudgy-penguins",
          label: "Example: NFT Mint Whitelist on L2 with Pudgy Penguins",
        },
        {
          type: "doc",
          id: "euclid-testnet/contract-addresses",
          label: "Contract Addresses",
        },
      ],
    },
    {
      type: "category",
      label: "AVS Operators",
      link: { type: "doc", id: "avs-operators/overview" },
      items: [
        {
          type: "doc",
          id: "avs-operators/stake-and-proofs",
          label: "Stake and Proofs",
        },
        {
          type: "doc",
          id: "avs-operators/prerequisites",
          label: "Prerequisites",
        },
        {
          type: "doc",
          id: "avs-operators/registration",
          label: "Registration",
        },
        {
          type: "doc",
          id: "avs-operators/run-worker",
          label: "Running a Worker",
        },
        {
          type: "doc",
          id: "avs-operators/contract-addresses",
          label: "Contract Addresses",
        },
      ],
    },
  ],
};

export default sidebars;

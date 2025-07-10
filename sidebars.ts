import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "doc",
      label: "DeepProve",
      id: "deepprove/overview",
    },
    {
      type: "category",
      label: "ZK Prover Network",
      link: {
        type: "doc",
        id: "lpn/overview",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Architecture",
          link: {
            type: "doc",
            id: "lpn/architecture/overview",
          },
          items: [
            {
              type: "doc",
              id: "lpn/architecture/gateway",
              label: "Gateway",
            },
            {
              type: "doc",
              id: "lpn/architecture/provers",
              label: "Provers",
            },
            {
              type: "doc",
              id: "lpn/architecture/dara",
              label: "DARA",
            },
          ],
        },
        {
          type: "category",
          label: "Operators",
          link: {
            type: "doc",
            id: "lpn/operators/overview",
          },
          items: [
            {
              type: "doc",
              id: "lpn/operators/stake-and-proofs",
              label: "Stake and Proofs",
            },
            {
              type: "doc",
              id: "lpn/operators/prerequisites",
              label: "Prerequisites",
            },
            {
              type: "doc",
              id: "lpn/operators/register",
              label: "Register",
            },
            {
              type: "doc",
              id: "lpn/operators/run-prover",
              label: "Running a Prover",
            },
            {
              type: "doc",
              id: "lpn/operators/deregister",
              label: "Deregister",
            },
            {
              type: "doc",
              id: "lpn/operators/contract-addresses",
              label: "Contract Addresses",
            },
          ],
        },
        {
          type: "category",
          label: "ZK Coprocessor",
          link: {
            type: "doc",
            id: "lpn/zk-coprocessor/overview",
          },
          collapsed: false,
          items: [
            {
              type: "doc",
              id: "lpn/zk-coprocessor/quickstart",
              label: "Quickstart",
            },
            {
              type: "category",
              label: "Verifable Database Architecture",
              link: {
                type: "doc",
                id: "lpn/zk-coprocessor/verifiable-database-architecture/overview",
              },
              items: [
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/verifiable-database-architecture/onchain-storage",
                  label: "Onchain's Storage",
                },
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/verifiable-database-architecture/storage-database",
                  label: "Storage Database",
                },
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/verifiable-database-architecture/state-database",
                  label: "State Database",
                },
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/verifiable-database-architecture/block-database",
                  label: "Block Database",
                },
              ],
            },
            {
              type: "category",
              label: "ZK MapReduce",
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
                  id: "lpn/zk-coprocessor/zkMapReduce/primer",
                  label: "Primer on MapReduce",
                },
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/zkMapReduce/zkmr",
                  label: "ZK MapReduce (ZKMR)",
                },
                {
                  type: "doc",
                  id: "lpn/zk-coprocessor/zkMapReduce/efficiency-improvements",
                  label: "Efficiency Improvements of ZKMR",
                },
              ],
            },
            {
              type: "doc",
              id: "lpn/zk-coprocessor/upcoming-features",
              label: "Upcoming Features",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;

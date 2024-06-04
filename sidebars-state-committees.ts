import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "overview",
    },
    {
      type: "doc",
      label: "Architecture",
      id: "architecture",
    },
    {
      type: "doc",
      label: "Inductive State Proofs",
      id: "inductive-state-proofs",
    },
    {
      type: "doc",
      label: "Slashing Conditions",
      id: "slashing",
    },
    {
      type: "category",
      label: "Operator Guide",
      link: {
        type: "generated-index",
        title: "Overview",
        description:
          "This guide provides a brief overview about the information needed to configure and run an attestation node on testnet and mainnet network using the CLI.",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Supported Chains",
          id: "operator-guide/supported-chains",
        },
        {
          type: "doc",
          label: "System Requirements",
          id: "operator-guide/system-requirements",
        },
        {
          type: "category",
          label: "Run an Attestation Node using CLI",
          link: {
            type: "generated-index",
            title: "Run an Attestation Node using CLI",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Prerequisite Installations",
              id: "run-node/prerequisite-installation",
            },
            {
              type: "doc",
              label: "Configuration File",
              id: "run-node/configuration-file",
            },
            {
              type: "doc",
              label: "Commands",
              id: "run-node/commands",
            },
            {
              type: "doc",
              label: "Scripts",
              id: "run-node/scripts",
            },
            {
              type: "doc",
              label: "Set up Keystore",
              id: "run-node/setup-keystore",
            },
            {
              type: "doc",
              label: "Register Operator",
              id: "run-node/register-operator",
            },
            {
              type: "doc",
              label: "Deploy Attestation Node",
              id: "run-node/deploy",
            },
            {
              type: "doc",
              label: "Monitoring",
              id: "run-node/monitoring",
            },
          ],
        },
        {
          type: "doc",
          label: "Contract Addresses",
          id: "operator-guide/contract-addresses",
        },
      ],
    },
  ],
};

export default sidebars;

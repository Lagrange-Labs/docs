import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      label: "Getting Started",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Operator Guide",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "state-committee-operator-guide/overview",
        },
        {
          type: "doc",
          label: "Supported Chains",
          id: "state-committee-operator-guide/supported-chains",
        },
        {
          type: "doc",
          label: "System Requirements",
          id: "state-committee-operator-guide/system-requirements",
        },
        {
          type: "doc",
          label: "Configuration File",
          id: "state-committee-operator-guide/configuration-file",
        },
        {
          type: "doc",
          label: "Commands",
          id: "state-committee-operator-guide/commands",
        },
      ],
    },
  ],
};

export default sidebars;

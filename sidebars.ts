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
          id: "lsc-operator-guide/overview",
        },
        {
          type: "doc",
          label: "Supported Chains",
          id: "lsc-operator-guide/supported-chains",
        },
        {
          type: "doc",
          label: "System Requirements",
          id: "lsc-operator-guide/system-requirements",
        },
      ],
    },
  ],
};

export default sidebars;

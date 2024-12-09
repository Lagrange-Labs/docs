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
      label: "DARA - Double Auction Resource Allocation",
      id: "dara",
    },
  ],
};

export default sidebars;

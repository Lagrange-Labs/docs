import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
require("dotenv").config();

const isDevelopment = process.env.ENVIRONMENT === "development";

const config: Config = {
  title: "Lagrange Docs",
  tagline: "Lagrange Docs",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://docs.lagrange.dev",
  baseUrl: "/",
  organizationName: "Lagrange-Labs",
  projectName: "lagrange-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  markdown: {
    format: "detect",
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          id: "zk-coprocessor",
          path: "docs/zk-coprocessor",
          routeBasePath: "zk-coprocessor",
          sidebarPath: require.resolve("./sidebars-zk-coprocessor.ts"),
          editUrl: ({ docPath }) =>
            `https://github.com/Lagrange-Labs/docs/tree/main/docs/zk-coprocessor/${docPath}`,
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs/state-committees",
        routeBasePath: "state-committees",
        sidebarPath: require.resolve("./sidebars-state-committees.ts"),
        editUrl: ({ docPath }) => {
          return `https://github.com/Lagrange-Labs/docs/tree/main/docs/state-committees/${docPath}`;
        },
        id: "state-committees",
        showLastUpdateTime: true,
        sidebarCollapsed: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs/prover-network",
        routeBasePath: "prover-network",
        sidebarPath: require.resolve("./sidebars-prover-network.ts"),
        editUrl: ({ docPath }) => {
          return `https://github.com/Lagrange-Labs/docs/tree/main/docs/prover-network/${docPath}`;
        },
        id: "prover-network",
        showLastUpdateTime: true,
        sidebarCollapsed: false,
      },
    ],
  ],
  themeConfig: {
    ...(isDevelopment
      ? {}
      : {
          algolia: {
            apiKey: process.env.ALGOLIA_API_KEY,
            appId: process.env.ALGOLIA_APP_ID,
            indexName: process.env.ALGOLIA_INDEX_NAME,
            contextualSearch: true,
          },
        }),
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },

    navbar: {
      logo: {
        src: "img/logo-light.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          to: "/prover-network/overview",
          label: "ZK Prover Network",
          position: "left",
        },
        {
          to: "zk-coprocessor/overview",
          label: "ZK Coprocessor",
          position: "left",
        },
        {
          href: "https://github.com/Lagrange-Labs/docs",
          className: "header-github-link",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Careers",
              to: "https://boards.greenhouse.io/lagrange",
            },
            {
              label: "Privacy Policy",
              to: "https://www.iubenda.com/privacy-policy/32733074/full-legal",
            },
            {
              label: "Terms and Conditions",
              to: "https://www.iubenda.com/terms-and-conditions/32733074",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/Lagrange-Labs",
            },
            {
              label: "X",
              to: "https://x.com/lagrangedev",
            },
            {
              label: "Discord",
              to: "https://discord.lagrange.dev",
            },
            {
              label: "Blog",
              to: "https://lagrange.dev/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lagrange Labs Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["solidity", "bash", "go"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

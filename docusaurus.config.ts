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
          id: "lagrange",
          path: "docs/",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: ({ docPath }) =>
            `https://github.com/Lagrange-Labs/docs/tree/main/docs/${docPath}`,
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
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
          to: "/deepprove/overview",
          label: "DeepProve",
          position: "left",
        },
        {
          to: "/lpn/overview",
          label: "ZK Prover Network",
          position: "left",
        },
        {
          to: "/lpn/zk-coprocessor/overview",
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
          className: "footer-item-center footer-mb",
        },
        {
          title: "Social",
          items: [
            {
              label: "X",
              to: "https://x.com/lagrangedev",
            },
            {
              label: "Blog",
              to: "https://lagrange.dev/blog",
            },
            {
              label: "GitHub",
              to: "https://github.com/Lagrange-Labs",
            },
            {
              label: "Discord",
              to: "https://discord.com/invite/lagrangefoundation",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/lagrange-labs/",
            },
          ],
          className: "footer-item-center footer-mb",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lagrange Labs Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["solidity", "bash", "go"],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

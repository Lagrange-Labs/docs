import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Lagrange State Committees Docs",
  tagline: "State Committees Docs",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
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
            `https://github.com/Lagrange-Labs/docs-zk-coprocessor/tree/main/docs/${docPath}`,
          showLastUpdateTime: true,
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
          return `https://github.com/Lagrange-Labs/docs/tree/main/docs/${docPath}`;
        },
        id: "state-committees",
        showLastUpdateTime: true,
      },
    ],
  ],
  themeConfig: {
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
          to: "zk-coprocessor/overview",
          label: "ZK Coprocessor",
          position: "left",
        },
        {
          to: "/state-committees/overview",
          label: "State Committees",
          position: "left",
        },
        {
          href: "https://github.com/Lagrange-Labs/docs",
          className: "header-github-link",
          position: "right",
          ariaLabel: "GitHub repository",
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
              to: "http://lagrange.dev/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lagrange Labs Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

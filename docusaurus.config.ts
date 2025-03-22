import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "YTML",
  tagline: "Create stunning animated videos with code.",
  url: "https://ytml-docs.web.app",
  baseUrl: "/",
  favicon: "img/ytml.svg",
  organizationName: "MergeConflict", // GitHub org/user
  projectName: "ytml-docs", // Repo name
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fahadarsal/ytml",
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "YTML",
      logo: {
        alt: "YTML Logo",
        src: "img/ytml.svg",
      },
      items: [
        { to: "/docs/intro", label: "Docs", position: "left" },
        { to: "/templates", label: "Templates", position: "left" },
        // { to: "/guides", label: "Guides", position: "left" },
        {
          href: "https://github.com/fahadarsal/ytml",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Getting Started", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/fahadarsal/ytml" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MergeConflict`,
    },
  },
};

export default config;

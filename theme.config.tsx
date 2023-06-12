import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  banner: {
    key: "wip",
    dismissible: false,
    text: <p>🚧 Work in progress / Obra en construcción 🚧</p>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – diego.do",
      };
    }
    return {
      titleTemplate: "diego.do",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Learn diego.do" />
      <meta property="og:description" content="Learn front-end development." />
    </>
  ),
  logo: <span>Learn</span>,
  footer: {
    text: "diego.do",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
  ],
  project: {
    link: "https://github.com/ramozdev/learn",
  },
  docsRepositoryBase: "https://github.com/ramozdev/learn",
};

export default config;

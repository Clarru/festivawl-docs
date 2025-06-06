import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Festivawl Documentation',
  tagline: 'Festival platform documentation and guides',
  favicon: 'img/favicon2.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.festivawl.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub integration for Festivawl
  organizationName: 'Clarru', // Usually your GitHub org/user name.
  projectName: 'festivawl-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Essential plugins for Festivawl docs
  plugins: [
    // Temporarily removed ideal-image plugin due to Sharp issues on Apple Silicon
    // '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-YOUR-TRACKING-ID',
        anonymizeIP: true,
      },
    ],
    // Removed sitemap plugin from here - it's included in the preset
  ],

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Clarru/festivawl-docs/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/festivawl-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Festivawl Logo',
        src: 'img/festivawl-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // Removed blog link since we disabled blog functionality
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Festivawl.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Algolia search configuration (to be configured later)
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID',
      apiKey: process.env.ALGOLIA_API_KEY || 'YOUR_SEARCH_API_KEY',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'festivawl_docs',
      contextualSearch: true,
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

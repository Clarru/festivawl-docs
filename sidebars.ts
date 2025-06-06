import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Festival Documentation Sidebar Configuration
 * 
 * Organized for festival organizers to quickly find what they need:
 * - Getting Started: Critical path to revenue
 * - Daily Operations: Managing live festivals
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Daily Operations', 
      items: ['festival-management'],
      collapsed: false,
    },
  ],
};

export default sidebars;

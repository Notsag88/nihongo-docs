import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nihongo Premium',
  tagline: 'Estudio serio, estructurado y profesional del japonés',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'nihongo',
  projectName: 'nihongo-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),

          // Sidebar behavior (PLUGIN LEVEL)
          sidebarCollapsible: true,
          sidebarCollapsed: true,

          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
  navbar: {
    title: 'Nihongo Premium',
    items: [
      {
        type: 'doc',
        docId: 'intro',
        label: 'Inicio',
        position: 'left',
      },
      {
        type: 'doc',
        docId: 'orientacion/index',
        label: 'Orientación',
        position: 'left',
      },
      {
        type: 'doc',
        docId: 'reinicio-a1/index',
        label: 'Reinicio A1',
        position: 'left',
      },
      {
        label: 'JLPT',
        position: 'left',
        items: [
          { type: 'doc', docId: 'n5/index', label: 'N5' },
          { type: 'doc', docId: 'n4/index', label: 'N4' },
          { type: 'doc', docId: 'n3/index', label: 'N3' },
        ],
      },
    ],
  },

    docs: {
      sidebar: {
        autoCollapseCategories: true, // ✅ ACÁ VA (NO en presets)
        hideable: true,
      },
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curso',
          items: [
            { label: 'Orientación', to: '/orientacion/' },
            { label: 'Reinicio A1', to: '/reinicio-a1/' },
            { label: 'JLPT N5', to: '/n5/' },
            { label: 'JLPT N4', to: '/n4/' },
            { label: 'JLPT N3', to: '/n3/' },
          ],
        },
        {
          title: 'Recursos',
          items: [
            { label: 'Bibliografía', to: '/recursos/bibliografia' },
            { label: 'Links JLPT', to: '/recursos/links-oficiales-jlpt' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Nihongo Premium`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

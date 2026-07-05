// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome Media',
  tagline: 'Awesome Media is a list of all the awesome software related to Plex, Emby and Jellyfin.',
  favicon: 'favicon.ico',

  staticDirectories: ['static', 'docs/assets'],

  url: 'https://awesome-media.net',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'johnfawkes',
  projectName: 'awesome-media',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/johnfawkes/awesome-media/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Awesome Media',
        logo: {
          alt: 'Awesome Media logo',
          src: 'logo.png',
        },
        items: [
          {to: '/', label: 'Awesome Media', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'thirdPartySidebar',
            position: 'left',
            label: 'Third Party Software',
          },
          {
            type: 'docSidebar',
            sidebarId: 'scriptsSidebar',
            position: 'left',
            label: 'Scripts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'postersSidebar',
            position: 'left',
            label: 'Downloading Posters',
          },
          {
            href: 'https://discordapp.com/users/732333413008277504',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/johnfawkes/awesome-media',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Media Servers',
            items: [
              {label: 'Plex', href: 'https://plex.tv'},
              {label: 'Jellyfin', href: 'https://jellyfin.org'},
              {label: 'Emby', href: 'https://emby.media'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/732333413008277504',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/johnfawkes/awesome-media/issues',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/johnfawkes/awesome-media/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/johnfawkes/awesome-media',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anon_Fawkes`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      }),
    ],
  ],
};

export default config;

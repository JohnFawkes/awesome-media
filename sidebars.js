// @ts-check

/**
 * Manually defined sidebars mirroring the previous MkDocs navigation
 * structure, grouped by the same three top-level sections.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  thirdPartySidebar: [
    'section/bazarr',
    'section/flixpatrol-to-trakt',
    'section/kometa',
    'section/lidarr',
    'section/maintainrr',
    'section/medialytics',
    'section/notifiarr',
    'section/ombi',
    'section/overseerr',
    'section/plexanisync',
    'section/plexautolanguages',
    'section/plextraktsync',
    'section/prowlarr',
    'section/publier',
    'section/qbitmanage',
    'section/radarr',
    'section/recyclarr',
    'section/retraktarr',
    'section/sonarr',
    'section/tautulli',
    'section/themerr-plex',
    'section/tcm',
    'section/tdarr',
    'section/toolbarr',
    'section/trash',
    'section/upgradinatorr',
    'section/wizarr',
    'section/wrapperr',
  ],
  scriptsSidebar: [
    'section/scripts/scriptoverview',
    {
      type: 'category',
      label: 'Kometa Scripts',
      items: [
        'section/scripts/kometa/romajirenamer',
        'section/scripts/kometa/pattrmm',
      ],
    },
    {
      type: 'category',
      label: 'Standalone Scripts',
      items: [
        'section/scripts/JBOPS',
        'section/scripts/bullmoose20',
        'section/scripts/chaz',
      ],
    },
  ],
  postersSidebar: [
    'section/posters/posteroverview',
    {
      type: 'category',
      label: 'Standalone Poster Scripts',
      items: [
        'section/posters/plex-poster-set-helper',
        'section/posters/daps',
        'section/posters/posterizarr',
        'section/posters/syncposterprocess',
      ],
    },
  ],
};

export default sidebars;

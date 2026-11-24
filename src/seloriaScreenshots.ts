/** Screenshot assets. Separate from seloriaContent so Node-side tests can import copy without a bundler. */
import albumDetail from './images/seloria/album-detail.webp';
import albums from './images/seloria/albums.webp';
import flow from './images/seloria/flow.webp';
import home from './images/seloria/home.webp';
import player from './images/seloria/player.webp';
import search from './images/seloria/search.webp';

export type Screenshot = { src: string; alt: string; caption: string };

/** iPhone screenshots (600px wide webp, from the App Store set). */
export const seloriaScreenshots: Screenshot[] = [
  {
    src: home,
    alt: 'Seloria home screen with recently played albums',
    caption: 'Home',
  },
  {
    src: flow,
    alt: 'Seloria Flow view, a 3D carousel of album covers',
    caption: 'Flow',
  },
  { src: albums, alt: 'Seloria album library grid', caption: 'Albums' },
  {
    src: albumDetail,
    alt: 'Seloria album detail with track list',
    caption: 'Album',
  },
  {
    src: player,
    alt: 'Seloria now playing screen with up next queue',
    caption: 'Player',
  },
  { src: search, alt: 'Seloria search screen', caption: 'Search' },
];

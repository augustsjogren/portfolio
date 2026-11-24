/**
 * Copy for the /seloria showcase page. Kept apart from content.ts so the
 * sibling Seloria pages can evolve without merge conflicts.
 */
import { site } from './content';

/**
 * Where to get the app. No App Store listing or TestFlight link exists yet.
 * When one does, set `url` (and update `label`/`note`); the page renders a
 * button for it automatically. Leave `url` null until then.
 */
export const seloriaDownload: {
  url: string | null;
  label: string;
  note: string;
} = {
  url: null,
  label: 'Download on the App Store',
  note: 'Coming soon. App Store and TestFlight links will appear here.',
};

export const seloria = {
  name: 'Seloria',
  path: '/seloria',
  canonical: `${site.url}/seloria`,
  label: 'Project',
  pageTitle: 'Seloria – iOS music player for Navidrome and Subsonic',
  description:
    'Seloria is a native iOS music player for your own Navidrome or Subsonic-compatible server. Offline downloads, no tracking, no third-party SDKs.',
  tagline: 'Your music, your server.',
  pitch:
    'A native iOS player for your own Navidrome or Subsonic-compatible server.',
  featuresLabel: 'Highlights',
  features: [
    {
      title: 'Streams from your own server',
      body: 'Point Seloria at your Navidrome or Subsonic-compatible server and play your library.',
    },
    {
      title: 'Offline downloads',
      body: 'Download whole albums to listen without a connection.',
    },
    {
      title: 'Cached artwork and library',
      body: 'Artwork and your library are cached on the device.',
    },
    {
      title: 'Ratings and play counts',
      body: 'Synced back to your server.',
    },
    {
      title: 'Demo mode',
      body: 'Try the app from the sign-in screen without a server of your own.',
    },
    {
      title: 'Private by design',
      body: 'No tracking, no analytics, no third-party SDKs. Your password is stored in the iOS Keychain.',
    },
  ],
  screenshotsLabel: 'Screenshots',
  screenshotsPlaceholder: 'Screenshots coming soon.',
  linksLabel: 'More',
  links: [
    { label: 'Privacy', to: '/seloria/privacy' },
    { label: 'Support', to: '/seloria/support' },
  ],
  home: {
    label: 'Project',
    text: 'Seloria, an iOS music player for your own Navidrome or Subsonic server',
    linkLabel: 'Seloria',
  },
};

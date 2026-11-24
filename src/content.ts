/**
 * All site copy lives here. Pages are dumb renderers; edit this file to
 * change what the site says, not how it is marked up.
 *
 * `heading` values render in order; parts with `accent: true` get the
 * graphite accent <em> styling, parts with `href` render as links.
 */

export type HeadingPart = { text: string; accent?: boolean };

export const site = {
  name: 'August Sjögren',
  url: 'https://imaugust.com',
  location: 'Malmö, SE',
  email: 'hello@imaugust.com',
  github: 'https://github.com/augustsjogren',
  linkedin: 'https://www.linkedin.com/in/august-sjogren',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/how-i-work', label: 'How I work' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export type Link = {
  label: string;
  href: string;
  external?: boolean;
  mail?: boolean;
};

export const links: Link[] = [
  { label: 'Email', href: `mailto:${site.email}`, mail: true },
  { label: 'LinkedIn', href: site.linkedin, external: true },
  { label: 'GitHub', href: site.github, external: true },
];

export type ListItem = {
  label: string;
  text: (HeadingPart & { href?: string; external?: boolean })[];
};

export const home = {
  title: 'Home',
  pageTitle: 'August Sjögren – Software Developer',
  description:
    "Hej! I'm August Sjögren, a software developer in Malmö, Sweden. I build web applications end to end with TypeScript, React and Node — working agentic, from idea to deploy.",
  hello: "Hej! I'm August.",
  heading: [{ text: 'Builder of software.' }] satisfies HeadingPart[],
  lede: "I'm a developer passionate about technology, AI, and thoughtful design. I build web applications from the ground up, working end to end with an agentic approach.",
  currently: [
    {
      label: 'Work',
      text: [
        { text: 'Software Engineer at ' },
        { text: 'Mpya Digital', href: 'https://www.mpyadigital.com', external: true },
      ],
    },
    {
      label: 'Prefers',
      text: [{ text: 'TypeScript, React, Node' }],
    },
    {
      label: 'For fun',
      text: [
        { text: 'Building ' },
        { text: 'Seloria', href: '/seloria' },
        { text: ', a native iOS player for your own Navidrome server' },
      ],
    },
    {
      label: 'Home lab',
      text: [
        { text: 'self-hosting my own services and running local AI models' },
      ],
    },
    {
      label: 'Off screen',
      text: [{ text: 'music on vinyl and CD, and the gym when I can' }],
    },
  ] satisfies ListItem[],
  projectsLink: { text: 'See all projects', href: '/projects' },
};

export type Project = {
  name: string;
  kind: string;
  description: string;
  href: string;
  external?: boolean;
  cta: string;
};

export const projects = {
  title: 'Projects',
  pageTitle: 'Projects – August Sjögren',
  description:
    'Projects by August Sjögren: Seloria, a native iOS music player for your own Navidrome or Subsonic server, and chef, a Rust TUI that keeps agent skills synced between harnesses.',
  heading: [
    { text: 'Things I ' },
    { text: 'build', accent: true },
    { text: ' for fun.' },
  ] satisfies HeadingPart[],
  lede: 'Side projects, built the way I like to work: small, sharp and shipped.',
  items: [
    {
      name: 'Seloria',
      kind: 'iOS app',
      description:
        'A native iOS music player for your own Navidrome or Subsonic server. Your library, your server, no subscription.',
      href: '/seloria',
      cta: 'Read more',
    },
    {
      name: 'chef',
      kind: 'Rust TUI',
      description:
        'A terminal app that keeps agent skills synced between harnesses, so every agent works from the same kitchen.',
      href: 'https://github.com/augustsjogren/chef',
      external: true,
      cta: 'View on GitHub',
    },
  ] satisfies Project[],
};

export const howIWork = {
  title: 'How I work',
  pageTitle: 'How I work – August Sjögren',
  description:
    "How August Sjögren works: no fixed tool list, but constant principles — own the whole problem, agents type while he architects, and clarity beats cleverness.",
  heading: [
    { text: 'The stack changes. ' },
    { text: 'The principles', accent: true },
    { text: " don't." },
  ] satisfies HeadingPart[],
  lede: 'No fixed tool list. This is what stays constant.',
  toolsLabel: 'The stack, right now',
  tools: [
    'TypeScript',
    'React',
    'Node',
    'Azure',
    'Claude Code',
    'Cursor',
  ],
  principles: [
    {
      title: 'Own the whole problem.',
      body: "Front end, back end, or wherever it leads. I'd rather carry a feature from idea to deploy than only focus on a narrow part of it.",
    },
    {
      title: 'Agents type, I think.',
      body: 'I work fully agentic: agents do the heavy lifting, I stay the architect. I review, understand and stand behind everything before it ships.',
    },
    {
      title: 'Clear beats clever.',
      body: "In code and in conversation. I explain trade-offs, write what people will actually read, and hear what a client means instead of what they say. The person who can explain the system owns it.",
    },
  ],
};

export const contact = {
  title: 'Contact',
  pageTitle: 'Contact – August Sjögren',
  description:
    "Get in touch with August Sjögren. Email is fastest — he's also on LinkedIn and GitHub.",
  heading: [{ text: 'Get in touch.' }] satisfies HeadingPart[],
  lede: "Email is fastest. I'm also on LinkedIn and GitHub.",
  email: site.email,
  links: links.filter((link) => !link.mail),
};

export const notFound = {
  label: '404',
  pageTitle: 'Page not found – August Sjögren',
  description:
    "That page doesn't exist on imaugust.com. Head back home and try again.",
  heading: [{ text: 'Lost the trail.' }] satisfies HeadingPart[],
  message: "That route doesn't exist. Head back ",
  linkLabel: 'home',
  messageEnd: ' and try again.',
};

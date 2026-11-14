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
  location: 'Malmö, SE',
  email: 'hello@augustsjogren.com',
  github: 'https://github.com/augustsjogren',
  linkedin: 'https://www.linkedin.com/in/august-sjogren',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/how-i-work', label: 'How I work' },
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
        { text: 'chef', href: 'https://github.com/augustsjogren/chef', external: true },
        {
          text: ', a Rust TUI that keeps agent skills synced between harnesses',
        },
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
};

export const howIWork = {
  title: 'How I work',
  heading: [
    { text: 'The stack changes. ' },
    { text: 'The principles', accent: true },
    { text: " don't." },
  ] satisfies HeadingPart[],
  lede: 'No fixed tool list. This is what stays constant.',
  principles: [
    {
      title: 'Own the whole problem.',
      body: "Front end, back end, or wherever it leads. I'd rather carry a feature from idea to deploy than hand it off at a boundary.",
    },
    {
      title: 'Agents type, I think.',
      body: 'I work fully agentic: agents do the heavy lifting, I stay the architect. I review, understand and stand behind everything before it ships.',
    },
    {
      title: 'Fundamentals compound.',
      body: 'Tools come and go. Judgment sticks. I learn what the task needs and let go of the rest.',
    },
  ],
};

export const contact = {
  title: 'Contact',
  heading: [{ text: 'Get in touch.' }] satisfies HeadingPart[],
  lede: "Email is fastest. I'm also on LinkedIn and GitHub.",
  email: site.email,
  links: links.filter((link) => !link.mail),
};

export const notFound = {
  label: '404',
  heading: [{ text: 'Lost the trail.' }] satisfies HeadingPart[],
  message: "That route doesn't exist. Head back ",
  linkLabel: 'home',
  messageEnd: ' and try again.',
};

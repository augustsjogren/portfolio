/**
 * All site copy lives here. Pages are dumb renderers; edit this file to
 * change what the site says, not how it is marked up.
 *
 * `heading` values are rendered in order; parts with `accent: true` are
 * wrapped in an <em> by the pages (accent styling lives in the markup).
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
  { to: '/about', label: 'About' },
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

export const home = {
  title: 'Home',
  hello: "Hej! I'm August.",
  heading: [{ text: 'Builder of software.' }] satisfies HeadingPart[],
  lede: "I'm a developer passionate about technology, AI, and thoughtful design. I build web applications from the ground up, working end to end with an agentic approach.",
  currently: [
    {
      label: 'Building',
      text: 'a Rust TUI that keeps agent skills in one place and links them into your coding tools',
      href: 'https://github.com/augustsjogren/chef',
      hrefLabel: 'chef',
    },
    { label: 'Building', text: 'a music player app' },
    { label: 'Collecting', text: 'vinyl and CDs of all sorts' },
    { label: 'Gym', text: 'when I can' },
  ],
};

export const about = {
  title: 'About',
  heading: [{ text: 'Web developer in Malmö.' }] satisfies HeadingPart[],
  paragraphs: [
    "I'm a web-focused developer with an eye for design. I like carrying a feature the whole way: front end, back end, deploy. I don't commit to specific tools; I pick what fits the task.",
    'I work fully agentic, daily-driving Claude Code, Cursor and Pi, and I keep tuning the setup to stay efficient. At home I run local models on my own hardware and tinker with different quants.',
    'Off screen: music on vinyl and CD, and the gym when I can.',
  ],
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
      body: 'I work fully agentic: agents do the heavy lifting, I stay the architect. I review, understand and stand behind everything before it ships. The setup never stands still; I keep tuning it.',
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
  links,
};

export const notFound = {
  label: '404',
  heading: [{ text: 'Lost the trail.' }] satisfies HeadingPart[],
  message: "That route doesn't exist. Head back ",
  linkLabel: 'home',
  messageEnd: ' and try again.',
};

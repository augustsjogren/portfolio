import type { HeadingPart } from '../content';
import landing from '../pages/landing.module.css';

/**
 * Renders a heading from content.ts; parts marked `accent` get the
 * graphite accent <em> styling.
 */
export const Heading = ({ parts }: { parts: HeadingPart[] }) => (
  <>
    {parts.map((part) =>
      part.accent ? (
        <em key={part.text} className={landing['landing-accent']}>
          {part.text}
        </em>
      ) : (
        <span key={part.text}>{part.text}</span>
      ),
    )}
  </>
);

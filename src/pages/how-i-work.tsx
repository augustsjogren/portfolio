import React from 'react';
import '../styles/pages.scss';

const PRINCIPLES = [
  {
    title: 'Own the whole problem.',
    body: "Front end, back end, or wherever the path leads. I'd rather carry a feature from idea to deploy than hand it off at a boundary.",
  },
  {
    title: 'Proof beats promises.',
    body: "A feature isn't done when it looks right. It's done when it's tested. E2e tests keep everything honest.",
  },
  {
    title: 'Agents type, I think.',
    body: 'I let AI coding agents do the heavy lifting, but I stay the architect: I review, understand and stand behind everything before it ships.',
  },
  {
    title: 'Fundamentals compound.',
    body: 'Tools come and go. Judgment is the asset that appreciates. I learn whatever the task needs and let go of what it doesn’t.',
  },
];

const HowIWorkPage = () => {
  return (
    <div className='page'>
      <title>How I work</title>

      <p className='page-label'>How I work</p>
      <h1 className='page-title'>
        The stack changes. <em className='landing-accent'>This</em>{' '}
        doesn&apos;t.
      </h1>
      <p className='page-lede'>
        No fixed tool list. Here&apos;s what actually stays constant in how I
        build things.
      </p>

      <ul className='principles'>
        {PRINCIPLES.map((p) => (
          <li key={p.title} className='principle'>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>

      <div className='page-footer'>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default HowIWorkPage;

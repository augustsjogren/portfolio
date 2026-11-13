import React from 'react';
import '../styles/pages.scss';
import '../styles/landing.scss';

const ContactPage = () => {
  return (
    <div className='page'>
      <title>Contact</title>

      <p className='page-label'>Contact</p>
      <h1 className='page-title'>Get in touch.</h1>
      <p className='page-lede'>
        The fastest way to reach me is email. I&apos;m also on LinkedIn and
        GitHub — say hi about code, music, or running.
      </p>

      <div className='landing-link-row'>
        <a
          className='landing-chip landing-chip-mail'
          href='mailto:hello@augustsjogren.com'
        >
          Say hi <span className='arr'>→</span>
        </a>
        <a
          className='landing-chip'
          href='https://www.linkedin.com/in/august-sjogren'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn <span className='arr'>→</span>
        </a>
        <a
          className='landing-chip'
          href='https://github.com/augustsjogren'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub <span className='arr'>→</span>
        </a>
      </div>

      <div className='page-footer'>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default ContactPage;

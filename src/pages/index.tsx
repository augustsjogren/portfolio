import React from 'react';
import profileImage from '../images/Aggebagge_web.webp';
import '../styles/landing.scss';

const IndexPage = () => {
  return (
    <div className='landing'>
      <title>Home</title>

      <section className='landing-hero'>
        <div className='landing-hero-text'>
          <p className='landing-hello'>Hej — I&apos;m August.</p>
          <h1 className='landing-title'>
            Runner, beatmaker, <em className='landing-accent'>builder</em> of
            odd things.
          </h1>
          <p className='landing-lede'>
            By day I build web apps — full stack, from idea to deploy. The rest
            of the time I&apos;m making <strong>music</strong>, chasing a faster{' '}
            <strong>5k</strong>, or taking something apart to see how it works.
          </p>
        </div>
        <div className='landing-portrait-wrap'>
          <img
            className='landing-portrait'
            src={profileImage}
            alt='Portrait of August'
          />
          <span className='landing-sticker'>Malmö, SE</span>
        </div>
      </section>

      <section className='landing-section' aria-labelledby='now-heading'>
        <p className='landing-section-label' id='now-heading'>
          Currently
        </p>
        <ul className='landing-now-list'>
          <li>
            <span className='dot' />
            <span>
              <b>Making</b> — a track that refuses to leave the 8-bar loop stage
            </span>
          </li>
          <li>
            <span className='dot' />
            <span>
              <b>Running</b> — chasing a sub-20 5k before winter
            </span>
          </li>
          <li>
            <span className='dot' />
            <span>
              <b>Building</b> — a small web app nobody asked for (someone always
              asks)
            </span>
          </li>
        </ul>
      </section>

      <section className='landing-section' aria-labelledby='links-heading'>
        <p className='landing-section-label' id='links-heading'>
          Find me
        </p>
        <div className='landing-link-row'>
          <a
            className='landing-chip'
            href='https://github.com/augustsjogren'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub <span className='arr'>→</span>
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
            className='landing-chip landing-chip-mail'
            href='mailto:hello@augustsjogren.com'
          >
            Say hi <span className='arr'>→</span>
          </a>
        </div>
      </section>

      <footer className='landing-footer'>
        <span>© August Sjögren</span>
        <span>built with too much coffee</span>
      </footer>
    </div>
  );
};

export default IndexPage;

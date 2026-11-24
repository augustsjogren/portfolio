import { useCallback, useEffect, useRef, useState } from 'react';
import type { Screenshot } from '../seloriaScreenshots';
import styles from '../pages/seloria.module.css';

/**
 * Horizontal scroll-snap gallery with prev/next chevrons. Buttons disable at
 * the ends; an edge fade on the right hints there is more to scroll.
 */
export const ScreenshotGallery = ({ shots }: { shots: Screenshot[] }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = listRef.current;
    if (!el) return;
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: reduce ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={styles.gallery} data-at-end={atEnd}>
      <div className={styles['gallery-controls']}>
        <button
          type='button'
          className={styles['gallery-btn']}
          aria-label='Previous screenshots'
          disabled={atStart}
          onClick={() => scrollByPage(-1)}
        >
          ‹
        </button>
        <button
          type='button'
          className={styles['gallery-btn']}
          aria-label='Next screenshots'
          disabled={atEnd}
          onClick={() => scrollByPage(1)}
        >
          ›
        </button>
      </div>
      <ul className={styles.shots} ref={listRef} onScroll={update}>
        {shots.map((shot) => (
          <li key={shot.src} className={styles['shot-item']}>
            <img
              className={styles.shot}
              src={shot.src}
              alt={shot.alt}
              width={600}
              height={1304}
              loading='lazy'
            />
            <span className={styles['shot-caption']}>{shot.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

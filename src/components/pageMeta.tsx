import { useEffect } from 'react';

/**
 * Per-page head metadata. React 19 dedupes hoisted <meta> tags against the
 * static ones in index.html, so per-route descriptions are updated directly
 * on the static tags instead. Keeps exactly one description and at most one
 * canonical link in the document head.
 */
export type PageMetaProps = {
  description: string;
  canonical?: string;
};

export const PageMeta = ({ description, canonical }: PageMetaProps) => {
  useEffect(() => {
    const descriptionTag = document.head.querySelector(
      'meta[name="description"]'
    );
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonical);
    } else if (canonicalTag) {
      canonicalTag.remove();
    }
  }, [description, canonical]);

  return null;
};

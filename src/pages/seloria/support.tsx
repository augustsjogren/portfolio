import { site } from '../../content';
import { seloriaEmail } from './content';
import { ProsePage } from '../../components/prosePage';

const SupportPage = () => (
  <ProsePage
    title='Seloria Support'
    documentTitle='Seloria Support – August Sjögren'
    description='Get help with Seloria, an iOS music player for your own Navidrome or Subsonic-compatible server. Contact details and what to include.'
    canonical={`${site.url}/seloria/support`}
  >
    <h2>Contact</h2>
    <p>
      Email <a href={`mailto:${seloriaEmail}`}>{seloriaEmail}</a>. Include your
      iOS version, Seloria version, and server type and version (Navidrome
      etc.).
    </p>

    <h2>Before you start</h2>
    <p>
      Seloria needs your own Navidrome or Subsonic-compatible server. A built-in
      demo mode is available from the sign-in screen.
    </p>
  </ProsePage>
);

export default SupportPage;

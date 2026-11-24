import { site } from '../../content';
import { ProsePage } from '../../components/prosePage';

const PrivacyPage = () => (
  <ProsePage
    title='Seloria Privacy Policy'
    documentTitle='Seloria Privacy Policy – August Sjögren'
    description='Privacy policy for Seloria, an iOS music player for your own Navidrome or Subsonic-compatible server. No tracking, no analytics, no third-party SDKs.'
    canonical={`${site.url}/seloria/privacy`}
    updated='2026-11-24'
  >
    <p>
      Seloria is a music player for your own Navidrome or Subsonic-compatible
      server. It does not collect, store or share your personal data with the
      developer or any third party.
    </p>

    <h2>What stays on your device</h2>
    <ul>
      <li>Your server address and streaming preferences (app settings).</li>
      <li>Your server password, in the iOS Keychain.</li>
      <li>
        Cached artwork and library data, and any albums you download for offline
        listening.
      </li>
      <li>
        Diagnostic reports (crash and performance data) written by Apple&rsquo;s
        MetricKit, kept in the app&rsquo;s private storage. You can turn this
        off under Settings &rarr; Privacy (&ldquo;Keep diagnostics on
        device&rdquo;).
      </li>
    </ul>

    <h2>What leaves your device</h2>
    <p>
      Seloria connects only to the server you enter. Requests there include your
      username, an authentication token and your listening activity (for example
      play counts and ratings), which your server handles under your own
      control. Seloria sends nothing to us.
    </p>

    <h2>Tracking and third parties</h2>
    <p>No tracking, no analytics, no advertising, no third-party SDKs.</p>

    <h2>Apple</h2>
    <p>
      If you share app analytics with developers in iOS Settings &rarr; Privacy
      &amp; Security &rarr; Analytics &amp; Improvements, Apple may provide
      aggregated crash and usage reports to the developer through App Store
      Connect. This is controlled by Apple and your device settings, not by
      Seloria.
    </p>

    <h2>Children</h2>
    <p>Seloria is not directed at children and collects no data from anyone.</p>

    <h2>Changes</h2>
    <p>Updates to this policy will be posted on this page.</p>

    <h2>Contact</h2>
    <p>
      <a href={`mailto:${site.email}`}>{site.email}</a>
    </p>
  </ProsePage>
);

export default PrivacyPage;

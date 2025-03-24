import Footer from '../components/Footer';

export default function PrivacyPage() {
    return (
      <main className="p-8 max-w-3xl mx-auto pt-[5vh] pb-[4vh]">
        <h1 className="text-3xl font-bold font-emblema mb-4">Privacy Policy</h1>
        <section className="space-y-4 text-gray-700">
          <p>Last updated: March 15, 2025</p>
          <p>
            px to vw Converter ("we", "us", or "our") operates <a href="https://px-vw-converter.net" className="text-blue-600 underline">https://px-vw-converter.net</a> (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
          </p>
          <h2 className="text-2xl font-bold pt-6">Data Collection & Usage</h2>
          <p>We do not collect personal data directly. However, our Site may collect anonymized data through third-party services such as Google Analytics and Google AdSense. This data may include:</p>
          <ul className="list-disc pl-5">
            <li>IP addresses (anonymized)</li>
            <li>Browsing behavior on our Site</li>
            <li>Device information (e.g., browser type, operating system)</li>
            <li>Referring website</li>
          </ul>
          <p>This information helps us analyze trends and improve user experience.</p>
          <h2 className="text-2xl font-bold pt-6">Cookies & Tracking Technologies</h2>
          <p>We may use cookies and similar tracking technologies to enhance user experience and analyze traffic. Cookies may be placed by third-party services such as:</p>
          <ul className="list-disc pl-5">
            <li>Google Analytics (for tracking user behavior)</li>
            <li>Google AdSense (for displaying relevant ads)</li>
          </ul>
          <p>You can manage cookie settings in your browser and opt-out of personalized ads using <a href="https://adssettings.google.com/" className="text-blue-600 underline">Google's Ad Settings</a>.</p>
          <h2 className="text-2xl font-bold pt-6">Third-Party Services</h2>
          <p>Our Site integrates third-party services, including:</p>
          <ul className="list-disc pl-5">
            <li><strong>Google Analytics</strong>: Tracks and reports website traffic.</li>
            <li><strong>Google AdSense</strong>: Serves advertisements based on user interests and behavior.</li>
          </ul>
          <p>These services have their own privacy policies, and we encourage you to review them:</p>
          <ul className="list-disc pl-5">
            <li><a href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Privacy Policy</a></li>
          </ul>
          <p>You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline">Google Analytics Opt-Out Browser Add-on</a>.</p>
          <h2 className="text-2xl font-bold pt-6">Data Retention & Security</h2>
          <p>We do not store personal data. However, third-party services may retain anonymized data for analytics and advertising purposes. While we take reasonable measures to protect user data, we cannot guarantee absolute security due to the nature of the internet.</p>
          <h2 className="text-2xl font-bold pt-6">User Rights & Choices</h2>
          <p>As a user, you can:</p>
          <ul className="list-disc pl-5">
            <li>Disable cookies in your browser settings.</li>
            <li>Opt-out of personalized ads through Google Ad Settings.</li>
            <li>Use browser extensions to block tracking scripts.</li>
          </ul>
          <h2 className="text-2xl font-bold pt-6">Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          <h2 className="text-2xl font-bold pt-6">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>📧 Email: <a href="mailto:contact@px-vw-converter.net" className="text-blue-600 underline">contact@px-vw-converter.net</a></p>
        </section>
        <Footer />
      </main>
    );
  }
  
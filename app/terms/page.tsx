// app/terms/page.tsx
import Footer from '../components/Footer';


import React from 'react';

export default function TermsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold font-emblema mb-4">Terms of Service</h1>
          <section className="space-y-4 text-gray-700">
            <p>Last updated: March 15, 2025</p>
            <p>
              Welcome to px to vw Coverter. By accessing and using our website 
              (<a href="https://px-vw-converter.net/" className="text-blue-600 underline">
                https://px-vw-converter.net/
              </a>), 
              you agree to comply with and be bound by the following terms of service. If you do not agree with these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-bold pt-6">1. Use of the Service</h2>
            <p>
              The px to vw Coverter website is provided for informational and educational purposes. 
              Users must not use this site for any illegal or unauthorized activities. 
              We reserve the right to restrict or terminate access for users who violate these terms.
            </p>

            <h2 className="text-2xl font-bold pt-6">2. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and design, is owned by px to vw Coverter or licensed for use. 
              Users may not copy, modify, distribute, or republish content without permission.
            </p>

            <h2 className="text-2xl font-bold pt-6">3. Advertisements & Third-Party Services</h2>
            <p>
              This website may display advertisements through Google AdSense and other third-party ad networks. 
              Advertisers may collect certain data to provide personalized ads. 
              By using this site, you agree to the collection and use of such data as described in our 
              <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-bold pt-6">4. Disclaimers & Limitation of Liability</h2>
            <p>
              The information provided on this site is for general informational purposes only. 
              We do not guarantee the accuracy, completeness, or usefulness of any information provided. 
              We are not liable for any direct, indirect, or incidental damages resulting from the use of this website.
            </p>

            <h2 className="text-2xl font-bold pt-6">5. Modifications & Termination</h2>
            <p>
              We reserve the right to modify or discontinue any aspect of this website at any time, 
              including these terms of service. Updates will be posted on this page, and your continued use of the site 
              signifies acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold pt-6">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction where px to vw Coverter is operated. 
              Any legal disputes must be resolved in accordance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold pt-6">7. Contact Us</h2>
            <p>
              If you have any questions regarding these terms, please contact us at:  
              <a href="mailto:contact@px-vw-converter.net" className="text-blue-600 underline">
                contact@px-vw-converter.net
              </a>
            </p>
          </section>
          <Footer />
        </main>
  );
}

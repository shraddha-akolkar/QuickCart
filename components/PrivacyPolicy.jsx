import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800" id="policy">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Last updated: September 2025
      </p>

      {/* Section */}
      <section className="mb-8">
        <p>
          At <span className="font-semibold">Shraddha.dev</span>, we respect your privacy and are 
          committed to protecting your personal information. This Privacy Policy 
          explains how we collect, use, and safeguard your data when you shop 
          with us for headphones, speakers, mobile phones, and other electronics.
        </p>
      </section>

      {/* Info We Collect */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li><strong>Personal Information:</strong> name, email, phone number, shipping/billing address.</li>
          <li><strong>Payment Information:</strong> secure payment details (processed by trusted gateways).</li>
          <li><strong>Usage Data:</strong> browsing history, device type, IP address, and cookies.</li>
        </ul>
      </section>

      {/* How We Use */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Process and deliver your orders.</li>
          <li>Provide customer support.</li>
          <li>Send order updates, offers, or promotions (opt-out anytime).</li>
          <li>Improve website performance and product offerings.</li>
        </ul>
      </section>

      {/* Sharing */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          3. Sharing of Information
        </h2>
        <p>
          We do not sell or rent your data. We may share your information with:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
          <li>Logistics & delivery partners</li>
          <li>Payment gateways</li>
          <li>Legal authorities (if required by law)</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies & Tracking</h2>
        <p>
          We use cookies to remember preferences, analyze traffic, and improve site 
          performance. You can manage cookies in your browser settings.
        </p>
      </section>

      {/* Security */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
        <p>
          Your data is protected with encryption and secure servers. While we take 
          every precaution, no online system is 100% secure. Please use strong 
          passwords and keep your account details safe.
        </p>
      </section>

      {/* Rights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Access and request a copy of your data</li>
          <li>Update or correct your information</li>
          <li>Request deletion of your account (where applicable)</li>
          <li>Opt-out of marketing emails anytime</li>
        </ul>
      </section>

      {/* Children */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children’s Privacy</h2>
        <p>
          Our services are not directed to individuals under 13. We do not knowingly 
          collect data from children.
        </p>
      </section>

      {/* Updates */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be 
          posted here with an updated date.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have questions, contact us at: <br />
          📧 <a href="mailto:contact@shraddha.dev" className="text-blue-600 hover:underline">contact@shraddha.dev</a> <br />
          📞 +1-234-567-890
        </p>
      </section>

      <p className="text-center text-gray-600 mt-12 italic">
        ⚡ Shraddha.dev – Your trusted destination for premium headphones, speakers, and mobile tech.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

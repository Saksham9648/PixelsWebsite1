import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-4">Effective Date: May 24, 2025</p>

        <p className="text-gray-700 mb-4">
          Pixels Being ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://pixelsbeing.site/ or use our services, including Web Design, App Development, and related offerings. Please read this policy carefully. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We may collect:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Personal Information</strong>: Name, email address, phone number, or other details you provide via our contact form, project inquiries, or service agreements.</li>
          <li><strong>Usage Data</strong>: Information about your interactions with our website, such as IP address, browser type, pages visited (e.g., Services, Projects), and timestamps.</li>
          <li><strong>Cookies and Tracking Technologies</strong>: We use cookies to enhance user experience, track analytics, and personalize content. Manage preferences via your browser.</li>
          <li><strong>Project-Related Data</strong>: If you engage our services, we may collect project specifications or account data from third-party platforms (e.g., GitHub, hosting services) with your consent.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use your information to:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Deliver services like Web Design, App Development, and Digital Marketing.</li>
          <li>Respond to inquiries and manage client relationships.</li>
          <li>Process payments for custom projects or subscriptions.</li>
          <li>Analyze website usage to improve our offerings.</li>
          <li>Ensure security and prevent fraud.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. How We Share Your Information</h2>
        <p className="text-gray-700 mb-4">
          We do not sell your personal information. We may share it:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>With service providers (e.g., Vercel for hosting, payment processors) to deliver our services.</li>
          <li>To comply with legal requirements (e.g., court orders).</li>
          <li>With your consent, such as for third-party integrations in app development.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We use encryption and access controls to protect your data. However, no system is entirely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Your Choices</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Access and Update</strong>: Contact us to access or update your personal information.</li>
          <li><strong>Opt-Out</strong>: Unsubscribe from marketing emails via the link in our emails.</li>
          <li><strong>Cookies</strong>: Disable cookies in your browser, though this may limit functionality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          Our website may link to external sites (e.g., client project demos). We are not responsible for their privacy practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. International Users</h2>
        <p className="text-gray-700 mb-4">
          If you’re outside India, your data may be processed in [e.g., United States, where Vercel servers are located]. We comply with applicable laws like GDPR or CCPA where required.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">8. Children’s Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our services are not for individuals under 13. We do not knowingly collect data from children.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">9. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          Updates will be posted here with a new effective date. Continued use constitutes acceptance.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">10. Contact Us</h2>
        <p className="text-gray-700">
          Reach us at:
          <br />
          Email: pixelsbeing@gmail.com
          <br />
          Address: Nirmal nager Seth Ghat Road Lakhimpur, Uttar Pradesh 262701 India
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Conditions</h1>
        <p className="text-sm text-gray-600 mb-4">Effective Date: May 24, 2025</p>

        <p className="text-gray-700 mb-4">
          These Terms of Conditions ("Terms") govern your use of https://pixelsbeing.site/ and services provided by Pixels Being, including Web Design, App Development, and Digital Marketing. By using our services, you agree to these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Use of Services</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Eligibility</strong>: You must be 18 or older to use our services.</li>
          <li><strong>License</strong>: We grant a limited, non-exclusive license to use our website and services for personal or business purposes.</li>
          <li><strong>Prohibited Conduct</strong>: You may not:
            <ul className="list-circle pl-6">
              <li>Use our services illegally.</li>
              <li>Attempt to reverse-engineer our software or designs.</li>
              <li>Disrupt our website’s functionality or security.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Account Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>You are responsible for securing your account credentials (if applicable, e.g., for client project portals).</li>
          <li>Notify us immediately of unauthorized access.</li>
          <li>We are not liable for losses from unauthorized account use.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Intellectual Property</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Our website content, designs, and code are owned by Pixels Being or our licensors, protected by copyright and trademark laws.</li>
          <li>Project deliverables (e.g., websites, apps) are subject to ownership terms in service agreements.</li>
          <li>You may not reproduce or distribute our content without permission.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Payments and Subscriptions</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Services like custom Web Design or App Development require payment per project agreements.</li>
          <li>Subscriptions (if offered) auto-renew unless canceled via your account or by contacting us.</li>
          <li>Refunds are subject to project-specific agreements or applicable law.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Termination</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>We may suspend or terminate access for violating these Terms.</li>
          <li>You may stop using our services at any time. Data may be deleted upon termination.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Disclaimers and Limitation of Liability</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Services are provided "as is" without warranties.</li>
          <li>We are not liable for indirect or consequential damages.</li>
          <li>Our liability is limited to amounts paid to us in the past 12 months.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. Indemnification</h2>
        <p className="text-gray-700 mb-4">
          You agree to indemnify Pixels Being from claims arising from your use of our services or violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">8. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms are governed by the laws of [Your State/Country], with disputes resolved in [Your Jurisdiction] courts.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">9. Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          Updates will be posted here. Continued use constitutes acceptance.
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

export default TermsConditions;

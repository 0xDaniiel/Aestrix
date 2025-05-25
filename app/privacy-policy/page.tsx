import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 1st January 2025
      </p>

      <p className="mb-6">
        At Aestrix, we are committed to protecting your privacy. This Privacy
        Policy outlines how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Personal info (name, email, phone, company, etc.)</li>
        <li>Project details required for service delivery</li>
        <li>Website usage data (IP address, browser, cookies)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>To communicate with you</li>
        <li>To deliver and improve our services</li>
        <li>To send updates (you can opt out anytime)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        3. Sharing Your Information
      </h2>
      <p className="mb-6">
        We do not sell or rent your data. We may share it with trusted
        contractors or legal authorities when required.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures, including encryption
        and access controls, to safeguard your information. While we strive to
        maintain a high level of protection, we also recommend that users take
        appropriate steps to secure their personal data.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Access or update your data</li>
        <li>Request deletion</li>
        <li>Withdraw consent</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
      <p className="mb-6">
        We use cookies to improve your browsing experience. You may disable them
        via your browser settings.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
      <p className="mb-6">
        We are not responsible for the privacy policies of third-party websites
        linked on our platform.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
      <p className="mb-6">
        Updates will be posted here with a new effective date.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
      <p>
        Email us at{" "}
        <Link
          href="mailto:aestrix.dev@outlook.com"
          className="text-blue-600 underline"
        >
          aestrix.dev@outlook.com
        </Link>{" "}
        with any questions.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

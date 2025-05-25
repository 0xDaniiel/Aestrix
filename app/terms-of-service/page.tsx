import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 1st January 2025
      </p>

      <p className="mb-6">
        Welcome to Aestrix. These Terms of Service govern your use of our
        website and services. By accessing our platform, you agree to these
        terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Services</h2>
      <p className="mb-4">
        Aestrix is a creative technology agency that provides a range of digital
        solutions tailored to client needs. Our core services include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Frontend Development:</strong> Crafting modern, responsive
          user interfaces using React, Next.js, Tailwind, and other frameworks.
        </li>
        <li>
          <strong>Website Development:</strong> Designing and building custom
          websites — from landing pages to full-scale web applications.
        </li>
        <li>
          <strong>Mobile App Development:</strong> Creating cross-platform apps
          using React Native, Flutter, etc.
        </li>
        <li>
          <strong>Blockchain Solutions:</strong> Developing dApps, smart
          contracts (Solidity), and Web3 integrations.
        </li>
      </ul>
      <p className="mb-6">
        <strong>Example Projects We Handle:</strong>
        <br />
        • Building a crypto wallet dashboard with blockchain integration.
        <br />
        • Developing a mobile app for managing smart home devices and IoT
        integrations.
        <br />
        • Creating a landing page for a SaaS startup.
        <br />• Redesigning the frontend of an enterprise CRM tool.
      </p>
      <p className="mb-6">
        Each project is governed by a separate contract that outlines the scope,
        deliverables, payment structure, timelines, and rights.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Provide accurate, lawful information</li>
        <li>Use our services ethically and legally</li>
        <li>Abide by any contract-specific terms</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Project Contracts</h2>
      <p className="mb-6">
        Each project is governed by a signed agreement outlining scope,
        deadlines, and payment terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Payments</h2>
      <p className="mb-6">
        Payments are due as outlined in the project agreement. Late payments may
        result in service delays or fees.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Aestrix retains ownership until full payment</li>
        <li>
          Clients receive a non-exclusive license to use deliverables after
          payment
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">6. Revisions</h2>
      <p className="mb-6">
        Up to six (6) revisions are included. Further changes may incur
        additional charges.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Confidentiality</h2>
      <p className="mb-6">
        All confidential project details must be protected by both parties.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
      <p className="mb-6">
        Aestrix is not responsible for indirect or consequential damages
        resulting from project work.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Dispute Resolution</h2>
      <p className="mb-6">
        Disputes should be resolved through good-faith discussions. If
        unresolved, arbitration may be pursued.
      </p>

      <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
      <p className="mb-6">
        Terms may be updated periodically. Continued use of our site implies
        acceptance of any changes.
      </p>

      <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
      <p>
        Questions? Email us at{" "}
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

export default TermsOfService;

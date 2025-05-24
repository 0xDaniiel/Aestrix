import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub, FiMail } from "react-icons/fi";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const Footer = () => {
  return (
    <FadeInOnScroll>
      <footer className="text-gray-700 py-8">
        <hr className="border-t border-gray-200 mb-6" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Refund policy
            </Link>
          </div>

          <div className="flex justify-center gap-6 text-gray-700 text-lg">
            <Link
              href="https://x.com/0xDaniiel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <BsTwitterX />
            </Link>
            <Link
              href="https://github.com/aestrix-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FiGithub />
            </Link>
            <Link href="mailto:hello@aestrix.dev" className="hover:text-black">
              <FiMail />
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
          </p>
        </div>
      </footer>
    </FadeInOnScroll>
  );
};

export default Footer;

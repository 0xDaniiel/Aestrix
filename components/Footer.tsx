import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const Footer = () => {
  return (
    <FadeInOnScroll>
      <footer className="bg-gray-50 text-gray-700 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <p className="mb-4 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
          </p>

          <Link
            href="https://x.com/0xDaniiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-black hover:text-gray-800 font-semibold text-base"
          >
            <BsTwitterX className="w-5 h-5 text-black" />
            Connect with our Founder
          </Link>
        </div>
      </footer>
    </FadeInOnScroll>
  );
};

export default Footer;

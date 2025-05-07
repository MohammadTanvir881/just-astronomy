import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Information */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FaStar className="text-amber-400 text-xl mr-2" />
              <h3 className="text-xl font-bold text-white">
                JUST Astronomy Club
              </h3>
            </div>
            <p className="mb-4">
              Exploring the cosmos through observation, education, and community
              since 2015.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="hover:text-amber-400 transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-amber-400 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-amber-400 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="hover:text-amber-400 transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                <span>JUST University Observatory, Astronomy Department</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-amber-400 mr-3" />
                <span>contact@justastronomy.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-amber-400 mr-3" />
                <span>+123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} JUST Astronomy Club. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

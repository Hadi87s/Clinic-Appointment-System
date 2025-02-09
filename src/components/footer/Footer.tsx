import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">
              Clinic Appointment System
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Making healthcare more accessible and convenient for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/create-appointment"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/view-appointment"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  View you're Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300 flex items-center">
                <Mail className="mr-2" /> contact@clinic.com
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <Phone className="mr-2" /> +123 456 7890
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <MapPin className="mr-2" /> 123 Health St, Wellness City, WC
                12345
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with the latest news and health tips.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Clinic Appointment System. All Rights
            Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Designed with ❤️ by Your Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { cardVariants } from "../../types/@types";

const ContactUs = () => {
  return (
    <div className="bg-blue-50 py-12 px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Details & Map */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" />
                <span className="text-gray-700">contact@clinic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" />
                <span className="text-gray-700">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" />
                <span className="text-gray-700">
                  123 Health St, City, Country
                </span>
              </div>
            </div>
            <iframe
              className="w-full h-48 rounded-lg shadow-lg mt-6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509369!2d144.953736315316!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1638236720384!5m2!1sen!2sau"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;

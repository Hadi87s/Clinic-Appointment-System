import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen w-[100%] h-[100vh] absolute inset-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-25">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to our Clinic Appointment System, where we prioritize your
          health and convenience. Our goal is to provide an effortless way to
          schedule, manage, and attend appointments with ease.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="mt-8 bg-blue-50 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            We aim to simplify healthcare access by providing a seamless and
            efficient appointment scheduling system, ensuring that you receive
            the best medical care without the hassle of long waiting times.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="mt-8 bg-blue-50 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform is backed by a team of dedicated healthcare
            professionals and tech experts committed to enhancing your medical
            experience.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="mt-8 bg-blue-50 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a hassle-free appointment booking experience, ensuring
            minimal waiting time and maximum convenience. Your health is our
            priority.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="mt-8 bg-blue-50 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions? Reach out to us at{" "}
            <span className="font-bold">contact@clinic.com</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

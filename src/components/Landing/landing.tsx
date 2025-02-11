import { Link } from "react-router-dom";
import "../../App.css";
import Features from "../features/Features";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";
import ContactUs from "../contact/ContactUs";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div
      className="w-[100%] h-[100vh] absolute inset-0 "
      style={{
        backgroundImage: `url(${"../../../public/landingBackground.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          }}
          className="title mt-[200px] ml-15"
        >
          <h1 className="h1-size font-bold text-gray-800 mb-5">
            Your Health, Our Priority
          </h1>
          <p className="p-size text-gray-700 max-w-2xl leading-7">
            Book your clinic appointments effortlessly. With a few clicks,
            schedule, manage, and view your appointments anytime, anywhere.
          </p>
          <div className="flex justify-center w-[100%] mt-10 -ml-7.5">
            <Link
              to="/create-appointment"
              className="font-[500] p-4 transition duration-150 bg-blue-600 text-blue-50 rounded-2xl
              outline-2 outline-blue-50 hover:bg-blue-50 hover:text-blue-900 hover:outline-blue-800
              shadow-2xl mb-5"
            >
              Book an Appointment
            </Link>
          </div>
        </motion.div>
        <div
          className="hidden lg:block w-[500px] h-[730px]"
          style={{
            backgroundImage: `url(${"../../../public/doctor.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <Features />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;

import { Link } from "react-router-dom";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact/ContactUs";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { ITestimonail } from "../types/@types";

const testies : ITestimonail[] =[
  {
    quote: "This service exceeded my expectations! Highly recommended.",
    name: "Sarah Johnson",
    designation: "Marketing Manager",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Fantastic experience! I will definitely use it again.",
    name: "Michael Smith",
    designation: "Software Engineer",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Top-notch quality and excellent customer support.",
    name: "Emily Davis",
    designation: "Product Designer",
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "A seamless and enjoyable experience from start to finish.",
    name: "James Wilson",
    designation: "Entrepreneur",
    src: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Would definitely recommend this to my colleagues!",
    name: "Sophia Martinez",
    designation: "HR Specialist",
    src: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const Landing = () => {
  return (
    <div
      className="w-[100%] h-[100vh] absolute inset-0 "
      style={{
        backgroundImage: `url(${"/landingBackground.svg"})`,
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
            backgroundImage: `url(${"/doctor.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <Features />
      {/* <Testimonials /> */}
      <AnimatedTestimonials testimonials={testies} autoplay={true}/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;

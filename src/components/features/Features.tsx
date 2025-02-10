import React from "react";
import { motion } from "framer-motion";
import { Heart, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import { cardVariants } from "../../types/@types";

const features = [
  {
    icon: <Heart size={32} className="text-blue-700" />,
    title: "Quality Healthcare",
    description: "Access top medical professionals at your convenience.",
  },
  {
    icon: <CalendarCheck size={32} className="text-blue-700" />,
    title: "Easy Scheduling",
    description: "Book appointments effortlessly with just a few clicks.",
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-700" />,
    title: "Secure & Private",
    description: "Your health data is protected with top security measures.",
  },
  {
    icon: <Users size={32} className="text-blue-700" />,
    title: "Trusted by Thousands",
    description: "Join a community that prioritizes their health.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-blue-50 items-center">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10">
          Our platform is designed to provide a seamless experience with
          top-tier healthcare services.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-blue-50 p-6 rounded-xl shadow-md flex items-center space-x-4"
            >
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

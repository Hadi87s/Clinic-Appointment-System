import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "This clinic appointment system is a game changer!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Derek Smith",
    review:
      "The convenience and ease of use are unmatched. Highly recommend this platform!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Aaron Johnson",
    review:
      "Fantastic experience! I can book and manage my doctor appointments seamlessly.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]); // Reset interval when currentIndex changes

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 py-16 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-10">
        What Our Patients Say
      </h2>

      <div className="relative w-[300px] md:w-[600px] lg:w-[700px] p-6 bg-white shadow-xl rounded-xl">
        <motion.div
          key={reviews[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          />
          <h3 className="text-xl font-semibold text-blue-700 mt-4">
            {reviews[currentIndex].name}
          </h3>
          <p className="text-gray-600 mt-2 italic">
            "{reviews[currentIndex].review}"
          </p>

          <div className="flex justify-center mt-4 space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < reviews[currentIndex].rating
                    ? "text-blue-500 fill-blue-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 
          bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextReview}
          className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

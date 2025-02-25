import { motion } from 'framer-motion';
import React from 'react';
import { FaHeart, FaBrain, FaChild, FaSearch, FaSkull, FaUserMd } from 'react-icons/fa';

 const doctors = [
    {
      id: 1,
      name: 'Dr. Jack Reacher',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. Jack Reacher is a renowned cardiologist with over 15 years of experience.',
      icon: <FaHeart />,
    },
    {
      id: 2,
      name: 'Dr. Patrick Jane',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. Patrick Jane specializes in neurology and has a passion for research.',
      icon: <FaBrain />,
    },
    {
      id: 3,
      name: 'Dr. William Hue',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. William Hue is dedicated to providing the best care for children.',
      icon: <FaChild />,
    },
    {
      id: 4,
      name: 'Dr. Gregory House',
      specialty: 'Diagnostician',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. Gregory House is known for his unconventional diagnostic methods and sharp wit.',
      icon: <FaSearch />,
    },
    {
      id: 5,
      name: 'Dr. Derek Shepherd',
      specialty: 'Neurosurgeon',
      image: 'https://images.unsplash.com/photo-1550831106-0994fe8abcfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. Derek Shepherd is a top neurosurgeon with a reputation for saving lives.',
      icon: <FaSkull />,
    },
    {
      id: 6,
      name: 'Dr. John Watson',
      specialty: 'General Practitioner',
      image: 'https://images.unsplash.com/photo-1622253694242-abeb37a33e97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Dr. John Watson provides comprehensive care with a focus on patient well-being.',
      icon: <FaUserMd />,
    },
  ];

  const MeetOurDoctors: React.FC = () => {
    return (
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Meet Our Doctors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y:0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
               key={doctor.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-64 md:h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:opacity-0 from-black/100 to-black/10  group-hover:opacity-70 transition-all duration-300">
                </div>
                  <div className="absolute top-2 right-2 bg-blue-600/50 text-white rounded-3xl px-4 py-2 text-sm flex items-center">
                    {doctor.icon} <span className="ml-2">{doctor.specialty}</span>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end md:opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                    <h2 className="text-2xl font-bold text-white">{doctor.name}</h2>
                    <p className="text-white mt-2">{doctor.bio}</p>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default MeetOurDoctors;
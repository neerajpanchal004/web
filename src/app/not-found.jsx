
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Robot from './components/Robot';

const NotFound = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className='w-full relative'>
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
      `}</style>

      <motion.div
        className="flex items-center justify-center h-screen overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center text-white z-10">
          <motion.h1
            className="text-6xl font-extrabold mb-4 animate__animated animate__shakeX"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            404 - Page Not Found
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
          >
            Oops! The page you're looking for doesn't exist.
          </motion.p>
          <motion.button
            onClick={handleBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-800 flex items-center gap-1 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 focus:outline-none"
          >
            <FaArrowCircleLeft /> Back to Home
          </motion.button>

        </div>

        {/* Custom background animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-multiply animate-gradient"></div>
      </motion.div>
      <div>
      </div>
      <div className='absolute bottom-56'><Robot /></div>

    </div>
  );
};

export default NotFound;


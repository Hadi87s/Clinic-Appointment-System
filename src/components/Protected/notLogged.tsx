import React, { useContext } from "react";
import { motion } from "framer-motion";
import { authContext } from "../../providers/authProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const NotLogged: React.FC<IProps> = ({ children }) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  if (user !== null) return children;

  return (
    <div className="flex items-center justify-center h-[85vh] bg-gradient-to-br from-blue-500 to-sky-950 mt-5 rounded-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/20 backdrop-blur-lg border-2 border-white/30 shadow-2xl p-10 rounded-3xl text-center w-96"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-white mb-6"
        >
          Access Restricted 🚀
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="text-white/80 text-lg mb-8"
        >
          You must be logged in to view this page. Please sign in to continue.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
            className="transition duration-300 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-full shadow-lg"
            sx={{borderRadius:3}}
          >
            Go to Login Page
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotLogged;
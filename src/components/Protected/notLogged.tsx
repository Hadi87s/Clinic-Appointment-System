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
    <div className="flex items-center justify-center h-[90vh] bg-white rounded-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gradient-to-tl border-2 border-blue-300 from-blue-100 to-blue-300 backdrop-blur-lg shadow-lg p-10 rounded-2xl text-center w-96"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Access Restricted 🚀
        </h2>
        <p className="text-white/80 text-lg mb-6">
          You must be logged in to view this page. Please sign in to continue.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Go to Login Page
        </Button>
      </motion.div>
    </div>
  );
};

export default NotLogged;

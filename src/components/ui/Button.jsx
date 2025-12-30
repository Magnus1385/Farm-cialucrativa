import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 focus:ring-blue-500",
        accent: "bg-accent hover:bg-green-600 text-white shadow-lg shadow-green-500/30 focus:ring-green-500",
        danger: "bg-danger hover:bg-red-700 text-white shadow-lg shadow-red-500/30 focus:ring-red-500",
        outline: "border-2 border-primary text-primary hover:bg-blue-50 focus:ring-blue-500"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

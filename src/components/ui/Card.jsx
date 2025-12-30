import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;

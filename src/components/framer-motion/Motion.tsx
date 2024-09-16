"use client";
import React from "react";

import { motion } from "framer-motion";

const Motion = ({
  children,
  duration = 0.8,
}: {
  children: React.ReactNode;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;

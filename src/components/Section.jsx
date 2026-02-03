import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-28 relative ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary text-center">
              {title}
            </h2>
            {/* Header Underline: Cream Beige */}
            <div className="w-20 h-1.5 bg-secondary mt-4 rounded-full"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

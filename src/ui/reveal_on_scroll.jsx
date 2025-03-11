import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function RevealOnScroll({
  children,
  delay = 0.4,
  duration = 0.7,
  staggerChildren = 0.25,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-250px" });

  // Define animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}

export default RevealOnScroll;

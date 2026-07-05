import { motion, useInView, useReducedMotion } from "framer-motion";
import { Children, useRef } from "react";

// Reveals its children with a staggered fade-in as they scroll into view.
// Children are flattened (React.Children.toArray) so a mapped array *and* extra
// sibling elements each become their own grid/flex item, never nested into one.
function RevealOnScroll({
  children,
  duration = 0.5,
  staggerChildren = 0.25,
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : staggerChildren },
    },
  };

  // Gentle opacity fade; drop the positional (y) movement under reduced motion.
  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  const items = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {items.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default RevealOnScroll;

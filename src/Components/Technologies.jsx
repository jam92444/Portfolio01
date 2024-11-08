import React from "react";
import { FaBootstrap, FaJsSquare } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandVite } from "react-icons/tb";

const iconsVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(3)}
          className="py-4"
        >
          <FaJsSquare className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(5)}
          className="py-4"
        >
          <SiChakraui className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(2)}
          className="py-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(6)}
          className="py-4"
        >
          <TbBrandVite className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(6)}
          className="py-4"
        >
          <RiFirebaseFill className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariant(4)}
          className="py-4"
        >
          <RiTailwindCssFill className="text-7xl text-sky-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

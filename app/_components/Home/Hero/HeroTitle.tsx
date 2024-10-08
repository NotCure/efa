import React from "react";
import { motion } from "framer-motion";
import Button from "../../Overall/Buttons/Buttons";
import Para from "./Texts/Para";
import Title from "./Texts/Title";
const HeroTitle = () => {
  return (
    <div className="relative z-10 md:w-1/2 flex flex-col justify-center md:pt-40 pt-20">
      <Title></Title>
      <Para></Para>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 2.4 }}
      >
        <Button
          variant="joinUs"
          onClick={() => alert("Maak de video van after effect af")}
        >
          Join us!
        </Button>
        <Button variant="learnMore" onClick={() => alert("ali homo")}>
          Download App &rarr;
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroTitle;

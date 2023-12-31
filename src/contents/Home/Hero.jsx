import React from "react";
import { motion } from "framer-motion";

// Components
import Container from "@/components/Container";

// Assets
import HeroImg from "@/assets/HeroImg";

// motion
import { planetVariants, slideIn } from "@/utils/motion";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row justify-center lg:justify-between items-center mt-14 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="xl:bg-bgSpecial/40 rounded-r-full sm:pl-14 py-24"
        >
          <h1 className="md:text-7xl text-5xl text-secondary lg:leading-[93px] md:leading-[75px] xl:pl-10 font-medium">
            Vertipro is <br /> a{" "}
            <span className="bg-primary text-white">Vertical SaaS</span> <br />{" "}
            Venture Studio
          </h1>
          <div className="flex lg:gap-24 gap-12 pt-16 xl:pl-10">
            <div className="border-t border-t-black">
              <h1 className="text-[40px] text-secondary leading-[100%] font-semibold">432</h1>
              <span className="text-lg text-medium leading-5 mt-1">
                Companies
              </span>
            </div>
            <div className="border-t border-t-black">
              <h1 className="text-[40px] text-secondary leading-[100%] text-center font-semibold">
                7
              </h1>
              <span className="text-lg text-medium leading-5 mt-1">
                Categories
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
        className="mr-6"
          variants={planetVariants("right")}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <HeroImg />
        </motion.div>
      </div>
    </Container>
  );
}

export default Hero;

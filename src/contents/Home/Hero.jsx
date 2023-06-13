import React from "react";

// Components
import Container from "@/components/Container";

// Assets
import HeroImg from "@/assets/HeroImg";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center mt-14">
        <div className="lg:bg-bgSpecial/40 rounded-r-full pl-14 py-24">
          <h1 className="md:text-7xl text-3xl lg:leading-[93px] md:leading-[75px] font-medium">
            Vertipro is <br /> a{" "}
            <span className="bg-primary text-white">Vertical SaaS</span> <br /> Venture
            Studio
          </h1>
          <div className="flex lg:gap-24 gap-12 pt-16">
            <div className="border-t border-t-black">
              <h1 className="text-[40px] leading-[100%] font-semibold">432</h1>
              <span className="text-lg text-medium leading-5 mt-1">
                Companies
              </span>
            </div>
            <div className="border-t border-t-black">
              <h1 className="text-[40px] leading-[100%] text-center font-semibold">
                7
              </h1>
              <span className="text-lg text-medium leading-5 mt-1">
                Categories
              </span>
            </div>
          </div>
        </div>
        {/* <div>
          <HeroImg />
        </div> */}
      </div>
    </Container>
  );
}

export default Hero;

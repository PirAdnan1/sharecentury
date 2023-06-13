import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";


// assets
import RoomImg from "@/assets/Images/Room.png";

function Section5() {
  return (
    <div className="bg-bgSpecial py-28">
    <Container>
      <h1 className="text-[56px] leading-[62px] text-center font-semibold">
        What we’ve been up to
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-14">
        <div className="relative">
          <h1 className="text-[102px] leading-[113px] font-semibold absolute -top-1 left-[90px]">
            NEWS
          </h1>
          <div className="pr-10 py-14">
            <Image src={RoomImg} />
          </div>
          {/* <div className="w-[1.3px] h-[20rem] bg-gray-600"></div> */}
          <p className="text-[#667085] font-normal text-sm leading-4">6 SEPTEMBER 2022</p>
          <p className="text-[#667085] text-lg leading-5 font-semibold mt-2">Tech-enabled private equity</p>
        </div>

        <div>
          <h3 className="text-[32px] leading-[48px] font-semibold max-w-[627px]">
            Legitimate passive income Wiyhout Complicacy
          </h3>
          <p className="font-medium text-xl leading-[30px] text-gray-600 max-w-[583px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <h3 className="text-[32px] leading-[48px] font-semibold max-w-[627px] mt-10">
            Transparents And Reliable Cooperation
          </h3>

          <p className="font-medium text-xl leading-[30px] text-gray-600 max-w-[583px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Section5;

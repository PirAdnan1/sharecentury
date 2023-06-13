import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Assets
import FooterLogo from "@/assets/FooterLogo";
import Twitter from "@/assets/Twitter";
import Facebook from "@/assets/Faceook";
import Instagram from "@/assets/Instagram";
import Linkedin from "@/assets/Linkedin";
import Arrow from "@/assets/Arrow";
import Message from "@/assets/Message";

function Footer() {
  return (
    <div className="bg-black py-6">
      <Container>
        <div className="flex flex-row  justify-center items-center">
          <FooterLogo />
          <div className="flex">
            <div className="text-lg leading-5 font-bold flex flex-col ml-14 gap-10 text-gray-200">
              <Link href="#">Overview</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">News</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </div>
            <div className="ml-10 relative">
              <h3 className="text-white text-[32px] leading-[38px] font-bold">
                Stay in the know
              </h3>
              <div className="relative mt-6 pr-3">
                <input
                  type="text"
                  className="outline-none py-2 pl-9 -translate-x-2/2"
                  placeholder="yourmail@gmail.com"
                />
                <button className="bg-primary md:absolute w-full -translate-x-2/2 md:w-16 py-2 px-5">
                  {<Arrow />}
                </button>
                <div className="absolute top-2 left-2">
                  <Message />
                </div>
              </div>
              <p className="font-bold leading-5 text-lg text-gray-200 mt-12">
                Social Media
              </p>
              <div className="flex gap-2 mt-6">
                <Twitter />
                <Facebook />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

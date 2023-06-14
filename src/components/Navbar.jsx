import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Logo
import Logo from "@/assets/Logo";
import Hamberger from "@/assets/Hamburger";

function Navbar() {
  return (
    <Container>
      <div className="md:mx-[136px] mx-6 mt-3 xl:mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 relative">
            <Logo />
            <div className="w-[1.3px] h-[135px] bg-linecolor absolute left-28 top-0 hidden lg:block"></div>
            <div className="hidden md:block">
              <div className="flex  justify-between items-center">
                <ul className="flex  gap-14 ml-24">
                  <Link href="#">Overview</Link>
                  <Link href="#">Portfolio</Link>
                  <Link href="#">Blogs</Link>
                  <Link href="#">Blogs</Link>
                  <Link href="#">News</Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary flex justify-end px-5 py-3 text-white">
              Get In Touch
            </button>
          </div>
          <div className="md:hidden">
            <Hamberger />
          </div>
        </div>
        <div className="bg-gray-600 hidden lg:block ml-56 h-[1.3px]"></div>
      </div>
    </Container>
  );
}

export default Navbar;

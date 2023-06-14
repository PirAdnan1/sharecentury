import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Assets
import Logo from "@/assets/Logo";

function Navbar() {
  return (
    <Container>
      <div className="flex items-center justify-between 2xl:mx-28 mx-8 2xl:mt-12 md:my-6 relative">
        <div className="flex items-center">
          <Logo />
          <div className="w-[1.3px] hidden lg:block h-[9rem] bg-gray-500 ml-5 mt-14 absolute left-20"></div>
          <ul className="flex felx-row gap-14 lg:ml-24 md:ml-4">
            <Link href="#">Overview</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">News</Link>
          </ul>
        </div>
        <div>
          <button className="bg-primary px-5 py-3 text-white">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="h-[1.3px] ml-56 hidden  lg:block w-[1010px]  2xl:ml-80 absolute bg-gray-500 -top-6"></div>
      </div>
    </Container>
  );
}

export default Navbar;

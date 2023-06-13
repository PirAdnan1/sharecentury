import React,{useState} from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Assets
import Logo from "@/assets/Logo";

function Navbar() {
  
  return (
    <Container>
      <nav className="flex justify-between items-center px-5 lg:relative pt-4">
        <div className="flex md:items-center">
          <div>
            <Logo />
          </div>
          <div className="w-[1.3px] h-[9rem] hidden lg:block bg-gray-600 mt-6 ml-5"></div>
          <div>
            <ul className="flex flex-col mt-28 md:mt-0 sm:flex-row justify-center items-center gap-14 lg:ml-24 md:ml-3 text-lg">
              <Link href="#">
                Overview
              </Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">News</Link>
              <button className="text-lg bg-primary text-white flex text-center px-5 py-3 lg:hidden">
                Get In Touch
              </button>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="text-lg bg-primary text-white px-5 py-3">
            Get In Touch
          </button>
        </div>
      </nav>
      <div className="max-h-[1.3px] max-w-[1020px] hidden lg:block w-full h-full bg-gray-600 ml-56 absolute top-32"></div>
    </Container>
  );
}

export default Navbar;

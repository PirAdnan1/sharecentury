import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Assets
import Logo from "@/assets/Logo";
import Hamberger from "@/assets/Hamburger";

function Navbar() {
  return (
    <Container className="relative">
      <div className="inset-0 absolute md:relative bg-white h-screen md:h-auto overflow-y-hidden z-50 -translate-x-2/2">
        <nav className="flex justify-between items-center md:mx-16 mx-6 mt-12">
          <div className="flex flex-col md:flex-row  justify-center text-center md:items-center">
              <Logo />
            <ul className="gap-14 flex  md:ml-24 ml-0 translate-x-3/4 flex-col justify-center items-center mt-16 md:mt-0 md:flex-row">
              <Link href="#">Overview</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">News</Link>
            </ul>
            <button className="bg-primary mx-auto translate-x-3/4 px-5 lg:hidden py-3 mt-14 text-white">
              Get In Touch
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="bg-primary px-5 py-3  text-white">
              Get In Touch
            </button>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar;

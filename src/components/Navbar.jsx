// import React, { useState } from "react";

// const Navbar = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     { name: "SERVICE", link: "/" },
//     { name: "CAMPAIGNS", link: "/" },
//     { name: "ABOUT US", link: "/" },
//     { name: "CONTACT US", link: "/" },
//   ];
//   let [open, setOpen] = useState(false);
//   return (
//     <div className="shadow-md w-full fixed top-0 left-0">
//       <div className="lg:flex items-center justify-between bg-white lg:py-1 lg:px-10 px-7">
//         <div
//           className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//       text-gray-800"
//         >
//           <img
//             className
//             src="images/better oshida.png"
//             width={290}
//             alt="brand-logo"
//           />
//         </div>

//         <div
//           onClick={() => setOpen(!open)}
//           className="text-3xl absolute right-3 top-6 cursor-pointer lg:hidden"
//         >
//           <ion-icon className="ml-5" name={open ? "close" : "menu"}></ion-icon>
//         </div>

//         <ul
//           className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-100" : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link) => (
//             <li
//               key={link.name}
//               className="lg:ml-8 lg:text-lg md:pl-5 md:my-9 my-7"
//             >
//               <a
//                 href={link.link}
//                 className="text-gray-800 hover:text-green-900 duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <button className="bg-green-800 md:ml-3  lg:text-lg md:py-1 hover:bg-green-700 text-white px-6 rounded-3xl">
//             <ion-icon className="px-1" name="person-outline"></ion-icon>
//             Login
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";

// components
import Container from "./Container";

// Assets
import Logo from "@/assets/Logo";
import Hamberger from "@/assets/Hamburger";

function Navbar() {

let [open, setOpen] = useState(true)

function handleChange(){
    setOpen(!open)
}
  return (
    <Container>
      <nav className="flex justify-between items-center px-5  pt-4">
        <div className="flex md:items-center">
          <div>
            <Logo />
          </div>
          <div onClick={handleChange}>
            <button>
                {open ? <Hamberger /> : <Hamberger /> }
            </button>
          </div>
          <div className="w-[1.3px] h-[9rem] hidden lg:block bg-gray-600 mt-6 ml-5"></div>
          <div className="flex justify-between">
            <ul className="flex flex-col mt-28 md:mt-0 sm:flex-row  items-center gap-14 lg:ml-24 md:ml-3 text-lg">
              <Link href="#">Overview</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">News</Link>
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

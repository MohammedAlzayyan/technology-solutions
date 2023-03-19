import React, { useState } from "react";
import Button from "../../../../components/Button";

export const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="">
      <nav
        className={`fixed top-0 flex justify-between items-center py-10 px-32 z-30 ${
          colorChange ? "bg-primary" : "bg-transparent"
        }  w-[100%] `}
      >
        <a href="#">
          {/* <Logo className="cursor-pointer" /> */}
          <span className="text-xl text-white font-bold tracking-wider">
            Technology Solutions
          </span>
        </a>
        <div
          className={`flex gap-7 font-semibold ${
            colorChange ? "text-red" : "text-black"
          } `}
        >
          <a
            href="#"
            className="transition-colors cursor-pointer hover:text-white dark:text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="transition-colors cursor-pointer hover:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="transition-colors cursor-pointer hover:text-white"
          >
            Industries
          </a>
          <a
            href="#"
            className="transition-colors cursor-pointer hover:text-white"
          >
            Blog
          </a>
          <a
            href="#"
            className=" transition-colors cursor-pointer hover:text-white"
          >
            Appointment Booking
          </a>
        </div>
        <Button className="">Book a meeting</Button>
      </nav>
    </div>
  );
};

export default Navbar;

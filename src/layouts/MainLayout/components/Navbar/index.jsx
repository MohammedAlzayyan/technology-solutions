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
    <div>
      <nav
        className={`fixed top-0 flex justify-around bg-red py-20 px-6 ${
          colorChange ? "bg-red-400" : "bg-transparent"
        }  w-[100%] `}
      >
        <a>
          <div className="inline-flex items-center">
            {/* <Logo className="cursor-pointer" /> */}
            <span className="text-2xl font-bold tracking-wider text-center">
              Technology Solutions
            </span>
          </div>
        </a>
        <div className="flex items-center font-semibold">
          <a
            className="px-6 transition-colors cursor-pointer hover:text-white dark:text-white"
            aria-current="page"
          >
            Home
          </a>
          <a className="px-6 transition-colors cursor-pointer hover:text-white">
            Features
          </a>
          <a className="px-6 transition-colors cursor-pointer hover:text-white">
            Industries
          </a>
          <a className="px-6 transition-colors cursor-pointer hover:text-white">
            Blog
          </a>
          <a className="px-6 transition-colors cursor-pointer hover:text-white">
            Appointment Booking
          </a>
        </div>
        <Button className="absolute right-20 bottom-0">Book a meeting</Button>
      </nav>
    </div>
  );
};

export default Navbar;

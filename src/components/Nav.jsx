import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons_assets/Logo.svg";
import IconHumberger from "../assets/icons_assets/🦆 icon _hamburger_menu.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import Navitems from "./Navitems";
import { nav } from "../assets/index";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      <nav className="px-10 lg:px-48 p-5 fixed bg-white w-full h-22">
        <div className="flex justify-between">
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <IoCloseCircleOutline className="w-[45px] h-[35px]" />
            ) : (
              <img src={IconHumberger} alt="Menu" />
            )}
          </button>

          <Link to="/">
            <img src={Logo} width={150} height={80} className="max-sm:mx-32" alt="Logo" />
          </Link>
          <Navitems className="max-md:hidden flex justify-between gap-5"></Navitems>
        </div>

        {isOpen && <Navitems toggleMenu={toggleMenu} className='flex flex-col items-center' />}
      </nav>
    </div>
  );
}

export default Nav;
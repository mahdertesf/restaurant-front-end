import React from 'react';
import Navitems from '/src/components/Navitems.jsx';
import Logo from '/src/assets/icons_assets/Logo_.svg';
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='flex flex-col bg-slate-100 border-t-4 mt-20  py-12 text-neutral-500 px-18 '>
        <div className='flex justify-center gap-4 items-center row-start-1'>
          <p >All right Reserved</p>
          <FaCopyright/>
          <img src={Logo}  alt="Logo" />
        </div>
        <div className='flex justify-around mt-3 '>
        <Navitems className="col-start-1 row-start-2 row-span-6 ml-8 " />
        <div className='flex flex-col items-center justify-center'>
          <h5 className=" hover:text-red-900 text-lg md:text-2xl">Developed by Mahder</h5>
          <div>
          <Link to='https://github.com/mahdertesf' className='hover:text-red-900'><FaGithub /> Github</Link>
          <Link to='https://www.linkedin.com/in/mahder-tesfaye-abebe-396095327/' className='hover:text-red-900'><FaLinkedin />Linkedin</Link>
          </div>
        </div>

        </div>
        
      </footer>
    </>
  );
}

export default Footer;
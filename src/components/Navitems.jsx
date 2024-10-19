import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav } from "../assets/index";


function Navitems({ toggleMenu, className }) {
  return (
    <ul className={className}>
      {nav.map((item, index) => {
        return (
          <li key={index} onClick={toggleMenu} className='hover:text-red-900 '>
            <NavLink 
             to={item.link}
             className={({isActive})=> isActive? 'underline underline-thick decoration-lime-900 decoration-3 ':''}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Navitems;
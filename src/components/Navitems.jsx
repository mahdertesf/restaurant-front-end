import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from "../assets/index";

function Navitems({toggleMenu, className}){
  return (
    <ul className={className} >
          {nav.map((item) => {
            return (
              <li onClick={toggleMenu}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
  )
}

export default Navitems
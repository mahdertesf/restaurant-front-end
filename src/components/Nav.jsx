import React from 'react';
import {nav} from '../assets/index';

function Nav() {
  return (
    <header>
      <nav>
        <ul className='flex'>
          {nav.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

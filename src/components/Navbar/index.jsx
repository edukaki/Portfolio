import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../image/logo.svg';
import BtnHamburger from './BtnHamburger';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav className="flex flex-row justify-between md:items-center">
      <Logo className="fill-grayish-dark-blue" />
      <ul
        className={`${
          !hamburger ? 'hidden opacity-0' : 'opacity-100'
        } absolute top-[100%] right-0 py-6 px-14 bg-grayish-dark-blue text-white tracking-[2px] text-center uppercase transition-all duration-300
        md:opacity-100 md:flex md:flex-row md:top-auto md:right-auto md:relative md:bg-transparent md:text-inherit md:px-0
        `}
      >
        <li className="p-4">
          <NavLink
            to="/"
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive ? 'text-light-cyan font-bold' : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/portfolio"
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive ? 'text-light-cyan font-bold' : undefined
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/contact"
            onClick={() => setHamburger(false)}
            className={({ isActive }) =>
              isActive ? 'text-light-cyan font-bold' : undefined
            }
          >
            Contact me
          </NavLink>
        </li>
      </ul>
      <BtnHamburger btnOnclick={{ hamburger, setHamburger }} />
    </nav>
  );
};

export default Navbar;

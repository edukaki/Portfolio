import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../image/logo.svg';
import BtnHamburger from './BtnHamburger';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav className="flex flex-row justify-between py-8 relative">
      <Logo className="fill-grayish-dark-blue" />
      <ul
        className={`${
          !hamburger ? 'opacity-0' : 'opacity-100 '
        } absolute top-[100%] right-0 py-6 px-14 bg-grayish-dark-blue text-white tracking-[2px] text-center uppercase transition-all duration-300
        `}
      >
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
      <BtnHamburger btnOnclick={{ hamburger, setHamburger }} />
    </nav>
  );
};

export default Navbar;

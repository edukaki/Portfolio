import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../image/logo.svg';
import { ReactComponent as Linkedin } from '../../image/icons/linkedin.svg';
import { ReactComponent as Github } from '../../image/icons/github.svg';
import { ReactComponent as Twitter } from '../../image/icons/twitter.svg';
const Footer = () => {
  return (
    <footer className="flex flex-col bg-grayish-dark-blue">
      <ul className="py-6 px-14 text-white tracking-[2px] text-center uppercase">
        <li className="p-5">
          <Logo className="fill-very-light-grey m-auto" />
        </li>
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
      <ul className="flex flex-row justify-center pb-14">
        <li className="p-4">
          <Link to="https://github.com/edukaki">
            <Github className="fill-very-light-grey" />
          </Link>
        </li>
        <li className="p-4">
          <Link to="/#">
            <Twitter className="fill-very-light-grey" />
          </Link>
        </li>
        <li className="p-4">
          <Link to="https://www.linkedin.com/in/eduardo-arakaki/">
            <Linkedin className="fill-very-light-grey" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

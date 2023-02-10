import React from 'react';
import img from '../../image/image-homepage-hero.jpg';
import Button from '../Button';
import PropTypes from 'prop-types';

const HeadingAbout = (props) => {
  return (
    <header>
      <div className="relative space-y-8">
        <img src={img} alt="hero" className="w-full" />
        <div className="space-y-8 md:absolute md:bottom-0 md:left-0 md:pt-10 md:pr-10 md:w-[550px] 2xl:pr-[100px] md:bg-very-light-grey">
          <h1 className="md:-tracking-tight 2xl:tracking-wider 2xl:leading-[3.5rem]">
            {props.text}
          </h1>
          <Button text="About me" margin="mr-auto" />
        </div>
      </div>
    </header>
  );
};

HeadingAbout.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingAbout;

import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DownArrows } from '../../image/icons/down-arrows.svg';

const Button = (props) => {
  return (
    <button
      className={`group flex flex-row m-auto tracking-[2px] ${
        props.secondary
          ? 'py-4 text-grayish-dark-blue bg-white border-opacity-80 border-grayish-dark-blue border-2 hover:text-white hover:bg-grayish-dark-blue disabled:border-very-light-grey'
          : 'text-white bg-dark-blue hover:bg-light-cyan disabled:bg-light-grey disabled:text-grayish-dark-blue'
      }`}
    >
      <div
        className={`p-5 bg-black bg-opacity-10 ${
          props.secondary ? 'hidden' : ''
        }`}
      >
        <DownArrows className="stroke-light-cyan group-hover:stroke-white" />
      </div>
      <span className="px-8 m-auto uppercase">{props.text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

export default Button;

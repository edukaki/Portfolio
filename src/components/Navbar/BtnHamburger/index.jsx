import React from 'react';
import PropTypes from 'prop-types';

const BtnHamburger = (props) => {
  const { hamburger, setHamburger } = props.btnOnclick;
  return (
    <button onClick={() => setHamburger(!hamburger)}>
      <div className="flex flex-col gap-[6px] m-auto">
        <div
          className={`w-6 h-[2px] bg-grayish-dark-blue ${
            hamburger ? 'rotate-45' : ''
          } transition-all duration-200`}
        />
        <div
          className={`w-6 h-[2px] bg-grayish-dark-blue ${
            hamburger ? 'hidden' : ''
          }`}
        />
        <div
          className={`w-6 h-[2px] bg-grayish-dark-blue ${
            hamburger ? '-rotate-45 absolute' : ''
          } transition-all duration-200`}
        />
      </div>
    </button>
  );
};

BtnHamburger.propTypes = {
  btnOnclick: PropTypes.object.isRequired,
};

export default BtnHamburger;

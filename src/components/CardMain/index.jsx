import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CardMain = (props) => {
  return (
    <section
      className={`grid grid-flow-row ${
        props.flow === 'normal'
          ? 'md:grid-cols-2 md:gap-16'
          : props.flow === 'reverse'
          ? 'flex-row-reverse'
          : ''
      }`}
    >
      <img src={props.img} alt={props.alt} className="w-full" />
      <div
        className={`flex flex-col gap-6 py-10 ${
          props.border === 1
            ? 'border-light-grey border-b-2'
            : props.border === 2
            ? `border-light-grey border-y-2 ${props.flow ? '' : 'mt-8'}`
            : ''
        } `}
      >
        {props.titleWeight === 'bold' ? (
          <h2>{props.title}</h2>
        ) : (
          <h3>{props.title}</h3>
        )}
        <p className="pt-5 leading-8">{props.text}</p>
        {props.button && <Button text={props.button} secondary margin="ml-0" />}
      </div>
    </section>
  );
};

CardMain.propTypes = {
  alt: PropTypes.string,
  border: PropTypes.number,
  button: PropTypes.string,
  flow: PropTypes.string,
  img: PropTypes.node,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleWeight: PropTypes.string,
};

export default CardMain;

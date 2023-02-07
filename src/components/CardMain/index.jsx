import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CardMain = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.alt} className="w-full" />
      <div
        className={`flex flex-col gap-6 py-10 ${
          props.border === 1
            ? 'border-light-grey border-b-2'
            : props.border === 2
            ? 'border-light-grey border-y-2 mt-8'
            : ''
        }`}
      >
        {props.titleWeight === 'bold' ? (
          <h2>{props.title}</h2>
        ) : (
          <h3>{props.title}</h3>
        )}
        <p className="pt-5 leading-8">{props.text}</p>
        {props.button && <Button text={props.button} secondary />}
      </div>
    </section>
  );
};

CardMain.propTypes = {
  img: PropTypes.node,
  alt: PropTypes.string,
  titleWeight: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.number,
  button: PropTypes.string,
};

export default CardMain;

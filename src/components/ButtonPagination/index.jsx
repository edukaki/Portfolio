import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../image/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../image/icons/arrow-right.svg';
import PropTypes from 'prop-types';

const ButtonPagination = (props) => {
  return (
    <ul className="grid grid-cols-2 border-y mt-16">
      <li className="border-r">
        <Link to={props.prevLink} className="flex flex-col gap-4 py-6">
          <ArrowLeft />
          <h3 className="font-bold">{props.prevProjectTitle}</h3>
          <p>Previous Project</p>
        </Link>
      </li>
      <li>
        <Link
          to={props.nextLink}
          className="flex flex-col gap-4 items-end py-6"
        >
          <ArrowRight />
          <h3 className="font-bold">{props.nextProjectTitle}</h3>
          <p>Previous Project</p>
        </Link>
      </li>
    </ul>
  );
};

ButtonPagination.propTypes = {
  prevProjectTitle: PropTypes.string.isRequired,
  nextProjectTitle: PropTypes.string.isRequired,
  prevLink: PropTypes.node.isRequired,
  nextLink: PropTypes.node.isRequired,
};

export default ButtonPagination;

import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function Target({ target, weapon, disguise }) {
  return (
    <div className="dib ma4 w5 bg-white br3">
      <img className="w-100 o-c h20rem" src={target.img} alt="target" />
      <div className="ph3">
        <p className="b dark-red mb1 pb0 f5">Target: </p>
        <h2 className="open-sans f4 mt0 pt0 truncate">
          {target.name}
        </h2>
        <p className="b dark-gray mb1 pb0">Eliminate with: </p>
        <h2 className="open-sans f4 b mt0 pt0 truncate">
          {weapon}
        </h2>
        <p className="b dark-gray f5 b mb1 pb0">Disguised as: </p>
        <h2 className="open-sans f4 mt0 pt0 truncate">
          {disguise}
        </h2>
      </div>
    </div>
  );
}

Target.propTypes = {
  target: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  disguise: PropTypes.string.isRequired,
};

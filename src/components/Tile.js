import React from 'react';
// import PropTypes from 'prop-types';

function Tile({ innerContent, className }) {
  return <div className={className}>{innerContent ? innerContent : ''}</div>;
}

// Tile.propTypes = {};

export default Tile;

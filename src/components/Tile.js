import React from 'react';
// import PropTypes from 'prop-types';

function Tile({ innerContent }) {
  return <div className="board__tile">{innerContent ? innerContent : ''}</div>;
}

// Tile.propTypes = {};

export default Tile;

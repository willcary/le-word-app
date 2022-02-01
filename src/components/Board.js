import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Tile from "./Tile"

function Board() {
  const [boardContent, setBoardContent] = useState([
      ['a', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
  ])

  const KEYS = []
    
  return <div className="board">
      {boardContent.map((arr, index) => {
          return <div className="board__row" key={index}>{arr.map((item, index) => <Tile key={index} innerContent={item} />)}</div>
      })}
  </div>;
}

// Board.propTypes = {};

export default Board;

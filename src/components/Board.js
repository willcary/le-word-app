import React, { useContext } from 'react';
import { Context } from '../Context'
// import PropTypes from 'prop-types';

import Tile from "./Tile"

function Board() {
  const { boardContent } = useContext(Context)
    
  return <div className="board">
      {boardContent.map((arr, boardRowIndex) => {
          return <div className="board__row" key={`boardRow-${boardRowIndex}`} id={`boardRow-${boardRowIndex}`}>
            {arr.map((item, guessIndex) => <Tile key={`boardRow-${boardRowIndex}-tile-${guessIndex}`} innerContent={item} id={`boardRow-${boardRowIndex}-tile-${guessIndex}`} innerContent={item} />)}
          </div>
      })}
  </div>;
}

// Board.propTypes = {};

export default Board;

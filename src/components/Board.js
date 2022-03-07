import React, { useContext } from 'react'
import { Context } from '../Context'
import "../css/board.css"

import Tile from "./Tile"

function Board() {
  const { boardContent, boardStyles } = useContext(Context)
    
  return <div className="board">
      {boardContent.map((arr, boardRowIndex) => {
          return <div className="board__row" key={`boardRow-${boardRowIndex}`} id={`boardRow-${boardRowIndex}`}>
            {arr.map((item, guessIndex) => {
              return <Tile 
                key={`boardRow-${boardRowIndex}-tile-${guessIndex}`} 
                className={!boardStyles[boardRowIndex][guessIndex] ? "board__tile" : "board__tile " + boardStyles[boardRowIndex][guessIndex]} 
                innerContent={item} 
              />}
            )}
          </div>
      })}
  </div>;
}

export default Board;

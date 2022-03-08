import React, { useContext } from 'react';
import { Context } from "../Context"

export default function Alert() {
  const { gameOver, didWin, isWord, solution } = useContext(Context)
  
  if (!isWord) {
    return <div className="alert">Incorrect Spelling</div>
  } else if (gameOver && !didWin) {
    return <div className="alert">Solution: {solution}</div>
  } else {
    return null;
  }
}
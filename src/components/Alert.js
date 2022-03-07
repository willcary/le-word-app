import React, { useContext } from 'react';
import { Context } from "../Context"

export default function Alert() {
  const { gameOver, isWord, solution } = useContext(Context)
  
  if (!isWord) {
    return <div className="alert">Incorrect Spelling</div>
  } else if (gameOver) {
    return <div className="alert">Solution: {solution}</div>
  } else {
    return null;
  }
}
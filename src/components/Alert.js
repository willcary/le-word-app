import React from 'react';

export default function Alert({ gameOver, isWord, solution }) {
  if (!isWord) {
    return <div className="alert">Incorrect Spelling</div>
  } else if (gameOver) {
    return <div className="alert">Solution: {solution}</div>
  } else {
    return null;
  }
}


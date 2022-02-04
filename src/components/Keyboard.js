import React, { useContext } from 'react'
import { Context } from '../Context'
// import PropTypes from 'prop-types'

function Keyboard() {
  const { handleKey, keyboard } = useContext(Context)

  return <div className="keyboard">
      <div className="keyboard__row">
        {keyboard.firstRow.map(item => <button key={item.letter} value={item.letter} onClick={handleKey}>{item.letter}</button>)}
      </div>
      <div className="keyboard__row">
        <div className="spacer"></div>
        {keyboard.secondRow.map(item => <button key={item.letter} value={item.letter} onClick={handleKey}>{item.letter}</button>)}
        <div className="spacer"></div>
      </div>
      <div className="keyboard__row">
        {keyboard.thirdRow.map(item => <button key={item.letter} value={item.letter} className={(item.letter === "ENTER" || item.letter === "DEL") ? "wide-key" : undefined} onClick={handleKey}>{item.letter}</button>)}
      </div>
  </div>;
}

// Keyboard.propTypes = {};

export default Keyboard;

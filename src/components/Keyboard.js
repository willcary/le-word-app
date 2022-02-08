import React, { useContext } from 'react'
import { Context } from '../Context'
// import PropTypes from 'prop-types'
import "../css/keyboard.css"

function Keyboard() {
  const { handleKey, keyboard } = useContext(Context)

  return <div className="keyboard">
      <div className="keyboard__row">
        {keyboard[0].map(item => <button key={item.letter} value={item.letter} className={item.class} onClick={handleKey}>{item.letter}</button>)}
      </div>
      <div className="keyboard__row">
        <div className="spacer"></div>
        {keyboard[1].map(item => <button key={item.letter} value={item.letter} className={item.class} onClick={handleKey}>{item.letter}</button>)}
        <div className="spacer"></div>
      </div>
      <div className="keyboard__row">
        {keyboard[2].map(item => <button key={item.letter} value={item.letter} className={item.class} onClick={handleKey}>{item.letter}</button>)}
      </div>
  </div>;
}

// Keyboard.propTypes = {};

export default Keyboard;

import React from 'react';
// import PropTypes from 'prop-types';

import { LETTERS_FIRST_ROW, LETTERS_SECOND_ROW, LETTERS_THIRD_ROW } from "../assets/js/keyboardLetters"

function Keyboard() {
  return <div className="keyboard">
      <div className="keyboard__row">
        {LETTERS_FIRST_ROW.map(item => <button key={item}>{item}</button>)}
      </div>
      <div className="keyboard__row">
        <div className="spacer"></div>
        {LETTERS_SECOND_ROW.map(item => <button key={item}>{item}</button>)}
        <div className="spacer"></div>
      </div>
      {/*Figure out how to make Enter and Delete 1.5 flex units*/}
      <div className="keyboard__row">
        {LETTERS_THIRD_ROW.map(item => <button key={item}>{item}</button>)}
      </div>
  </div>;
}

// Keyboard.propTypes = {};

export default Keyboard;

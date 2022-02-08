import React from 'react';
import PropTypes from 'prop-types';
import "../css/modals.css"

function HelpModal({ show, close }) {
    const x = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>

    return show && <div className="modal">
        <div className="modal__inner modal-help">
            <header>
                <div classNam="menu"></div>
                <h2>HOW TO PLAY</h2>
                <div className="menu">
                    <button onClick={close} className="header-btn">{x}</button>
                </div>
            </header>
            <div className="modal-help__section">
                <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
                <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            </div>
            <div className="modal-help__section">
                <h3>Examples</h3>
                <div>WEARY</div>
                <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
                <div>PILLS</div>
                <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                <div>VAGUE</div>
                <p>The letter <strong>U</strong> is not in the word in any spot.</p>
            </div>
            <p><strong>A new WORDLE will be available each day!</strong></p>
        </div>
            
    </div>;
}

HelpModal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default HelpModal;

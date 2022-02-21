import React from 'react';
import PropTypes from 'prop-types';
import "../css/modals.css"

function HelpModal({ show, close, closing }) {
    const x = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    
    const modalAnimationClass = () => closing ? "modal__inner modal-close-animation" : "modal__inner modal-open-animation"

    return show && <div className="modal">
        <div className={modalAnimationClass()}>
            <header>
                <div className="menu"></div>
                <h2>HOW TO PLAY</h2>
                <div className="menu">
                    <button onClick={close} className="header-btn modal-help-close">{x}</button>
                </div>
            </header>
            <div className="modal-help__section">
                <p>Guess the <strong>WORD</strong> in 6 tries.</p>
                <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            </div>
            <div className="modal-help__section">
                <h3>Examples</h3>
                <div className='modal-tile-container'>
                    <div className="modal-tile flip green-overlay">B</div>
                    <div className="modal-tile">E</div>
                    <div className="modal-tile">A</div>
                    <div className="modal-tile">R</div>
                    <div className="modal-tile">S</div>
                </div>
                <p>The letter <strong>B</strong> is in the word and in the correct spot.</p>
                <div className='modal-tile-container'>
                    <div className="modal-tile">W</div>
                    <div className="modal-tile flip yellow-overlay">O</div>
                    <div className="modal-tile">R</div>
                    <div className="modal-tile">D</div>
                    <div className="modal-tile">S</div>
                </div>
                <p>The letter <strong>O</strong> is in the word but in the wrong spot.</p>
                <div className='modal-tile-container'>
                    <div className="modal-tile">C</div>
                    <div className="modal-tile">R</div>
                    <div className="modal-tile">A</div>
                    <div className="modal-tile flip gray-overlay">N</div>
                    <div className="modal-tile">E</div>
                </div>
                <p>The letter <strong>N</strong> is not in the word in any spot.</p>
            </div>
            <p><strong>Refresh the page for a new word!</strong></p>
        </div>
    </div>
}

HelpModal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default HelpModal;

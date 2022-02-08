import React from 'react'
import PropTypes from 'prop-types'
import "../css/modals.css"

function StatsModal({ show, close, closing }) {
  const x = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  
  const modalAnimationClass = () => closing ? " modal-close-animation" : " modal-open-animation"

  return show && <div className="modal modal-stats">
    <div className={"modal__inner modal-stats__inner" + modalAnimationClass()}>
      <header>
          <div className="menu"></div>
          <h2>Statistics</h2>
          <div className="menu">
            <button onClick={close} className="header-btn modal-stats-close">{x}</button>
          </div>
      </header>
      <div className="stats-container">
        <div className="stat-container">
          <p className="stat">6</p>
          <p className="stat-label">Played</p>
        </div>
        <div className="stat-container">
          <p className="stat">100</p>
          <p className="stat-label">Win %</p>
        </div>
        <div className="stat-container">
          <p className="stat">4</p>
          <p className="stat-label">Current Streak</p>
        </div>
        <div className="stat-container">
          <p className="stat">6</p>
          <p className="stat-label">Max Streak</p>
        </div>
      </div>
      <h2>Guess Distribution</h2>
      <div>Graphs here...</div>
    </div>
  </div>;
}

StatsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default StatsModal;

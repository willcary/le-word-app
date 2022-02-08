import React from 'react';
import PropTypes from 'prop-types';
import "../css/statsmodal.css"

function StatsModal({ show, close }) {
  return show && <div className="stats-modal">
    Stats here...
    <button onClick={close}>X</button>
  </div>;
}

StatsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default StatsModal;

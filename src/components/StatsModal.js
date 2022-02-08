import React from 'react';
import PropTypes from 'prop-types';
import "../css/statsmodal.css"

function StatsModal({ showStatsModal }) {
  return showStatsModal && <div className="stats-modal">Stats here...</div>;
}

StatsModal.propTypes = {
    showStatsModal: PropTypes.bool.isRequired
};

export default StatsModal;

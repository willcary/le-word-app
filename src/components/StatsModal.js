import React from 'react';
import PropTypes from 'prop-types';

function StatsModal({ showStatsModal }) {
  return showStatsModal && <div className="stats-modal">Stats here...</div>;
}

StatsModal.propTypes = {
    showStatsModal: PropTypes.bool.isRequired
};

export default StatsModal;

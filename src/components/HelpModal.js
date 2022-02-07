import React from 'react';
import PropTypes from 'prop-types';

function HelpModal({ showHelpModal }) {
  return showHelpModal && <div className="help-modal">Instructions here...</div>;
}

HelpModal.propTypes = {
    showHelpModal: PropTypes.bool.isRequired
};

export default HelpModal;

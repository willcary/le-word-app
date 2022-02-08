import React from 'react';
import PropTypes from 'prop-types';
import "../css/helpmodal.css"

function HelpModal({ showHelpModal }) {
  return showHelpModal && <div className="help-modal">
      <div className="help-modal__inner">
          Instructions here...
      </div>
          
  </div>;
}

HelpModal.propTypes = {
    showHelpModal: PropTypes.bool.isRequired
};

export default HelpModal;

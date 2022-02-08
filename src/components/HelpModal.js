import React from 'react';
import PropTypes from 'prop-types';
import "../css/helpmodal.css"

function HelpModal({ show, close }) {
  return show && <div className="help-modal">
      <div className="help-modal__inner">
          Instructions here...
          <button onClick={close}>X</button>
      </div>
          
  </div>;
}

HelpModal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default HelpModal;

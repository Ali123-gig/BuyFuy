import React from "react";
import { connect } from "react-redux";
import ErrorModal from "../ErrorModal/ErrorModal";
import TestModal from "../TestModal/TestModal"

var ModalLookUp = {
  testModal:TestModal,
  errorModal:ErrorModal,
};

const ModalManager = ({ modals }) => {
  var renderedModal = null;
  if (modals) {
    var { modalType, modalProps } = modals;
    var ModalComponent = ModalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <div>{renderedModal}</div>;
};
var mapState = (state) => ({
  modals: state.modals,
});
export default connect(mapState)(ModalManager);

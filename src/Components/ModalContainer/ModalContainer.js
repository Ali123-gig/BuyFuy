import React from "react";
import { connect } from "react-redux";
import "./ModalConainer.css";
import { closeModals } from "./../../Redux/modals/modalsAction";

const ModalContainer = ({ children, closeModals }) => {
  return (
    <div
      className="modal-container center"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModals();
      }}
    >
      {children}
    </div>
  );
};
var actions = {
  closeModals,
};

export default connect(null, actions)(ModalContainer);

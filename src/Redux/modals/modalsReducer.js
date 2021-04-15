import { CLOSE_MODALS, OPEN_MODALS } from "./modalsConstant";

const initalState = null;

const modalReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case OPEN_MODALS:
      return { modalType: payload.modalType, modalProps: payload.modalProps };
    case CLOSE_MODALS:
      return null;
    default:
      return state;
  }
};

export default modalReducer;

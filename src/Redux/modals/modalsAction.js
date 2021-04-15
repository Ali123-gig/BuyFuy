import { CLOSE_MODALS, OPEN_MODALS } from "./modalsConstant";

export var openModals = ({ modalType, modalProps = {} }) => ({
  type: OPEN_MODALS,
  payload: {
    modalProps,
    modalType,
  },
});

export var closeModals = () => ({
  type: CLOSE_MODALS,
});

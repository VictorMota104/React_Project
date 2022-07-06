import React from "react";
import { Modal as ModalComponent } from "antd";
import { useModalContext } from "./modal.context";
import "./Modal.css";

const Modal = () => {
  const {
    modalState: { messege, visible },
    closeModal,
  } = useModalContext();
  return (
    <ModalComponent onCancel={closeModal} visible={visible}>
      <p>{messege}</p>
      <div className="ant-modal-center">
        <input className="input" type="text" placeholder="R$ 0,00" />
        <select className="input-select">
          <option value={1}>Cartao final 1111</option>
          <option value={2}>Cartao final 1234</option>
        </select>
        <button type="button" className="ant-btn ant-btn-primary">
          <span>Pagar</span>
        </button>
      </div>
    </ModalComponent>
  );
};

export default Modal;

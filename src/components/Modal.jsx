import React, { useState } from "react";
import { Modal as ModalComponent } from "antd";
import { useModalContext } from "./modal.context";
import "./Modal.css";
import axios from "axios";

// const Api = axios.create({
//   baseURL: "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
// });

const Modal = () => {
  const [paymentValue, setPaymentValue] = useState();
  const [cardInfo, setCardInfo] = useState({
    card_number: "7",
    cvv: "77",
    expiry_date: "fyhj",
  });
  const [step, setStep] = useState(true);
  const [stepTwo, setStepTwo] = useState(true);

  let responseTransaction = {};

  const submitHandler = async () => {
    console.log("api sendo chamada ");

    try {
      const response = await axios.post(
        "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
        {
          card_number: cardInfo.card_number,
          cvv: cardInfo.cvv,
          expiry_date: cardInfo.expiry_date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      responseTransaction = response.data;
      if (response.status == 200) {
      }
    } catch (erro) {
      console.log(erro);
    }

    extractPayment();
  };

  let card =
    // valid card
    {
      card_number: "1111111111111111",
      cvv: "789",
      expiry_date: "01/18",
    };

  let invalidCard =
    // valid card
    {
      card_number: "4111111111111234",
      cvv: "123",
      expiry_date: "01/20",
    };

  const extractPayment = () => {
    if (responseTransaction.status === "Aprovada") {
      setStep(false);
    }
  };

  const finalPayment = () => {
    closeModal();
    setStep(true);
    setStepTwo(true);
  };

  const validationCard = () => {
    // console.log("ivalido", invalidCard, "Cadeirfo", cardInfo);
    if (cardInfo == invalidCard) {
      setStepTwo(false);
    }
  };

  const {
    modalState: { messege, visible },
    closeModal,
  } = useModalContext();

  return (
    <ModalComponent onCancel={closeModal} visible={visible}>
      {step == true ? (
        <>
          <p>{messege}</p>
          <div className="ant-modal-center">
            <input className="input" value={paymentValue} />
            <select
              className="input-select"
              onChange={(e) => {
                setCardInfo(e.target.value);
              }}
            >
              <option value={"default"} selected>
                Escolha um cartão
              </option>

              <option value={JSON.stringify(card)}>
                Cartão com final {card.card_number.slice(-4)}
              </option>
              <option value={invalidCard}>
                Cartão com final {invalidCard.card_number.slice(-4)}
              </option>
            </select>
            <button
              onClick={() => {
                submitHandler();
                validationCard();
              }}
              type="submit"
              className="ant-btn ant-btn-primary"
            >
              Pagar
            </button>
          </div>
        </>
      ) : stepTwo == true ? (
        <>
          <p>Recibo do pagamento</p>
          <div className="ant-modal-center">
            <h3>O pagamento foi concluído com sucesso</h3>
            <button className="ant-btn ant-btn-primary" onClick={finalPayment}>
              Fechar
            </button>
          </div>
        </>
      ) : (
        <>
          <p>Recibo do pagamento</p>
          <div className="ant-modal-center">
            <h3>
              O pagamento <strong>NÃO</strong> foi concluído com sucesso
            </h3>
            <button className="ant-btn ant-btn-primary" onClick={finalPayment}>
              Fechar
            </button>
          </div>
        </>
      )}
    </ModalComponent>
  );
};

export default Modal;

//Criar layout do succeess e do erro
// Criar useState e se for true - alterar telas
// className={useState ? 'dsddf : 'dada '}

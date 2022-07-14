import React, { useState } from "react";
import { Modal as ModalComponent } from "antd";
import { useModalContext } from "./modal.context";
import NumberFormat from "react-number-format";
import "./Modal.css";
import axios from "axios";

const Modal = () => {
  const [cardInfo, setCardInfo] = useState({});
  const [step, setStep] = useState(true);
  const [paymentError, setpaymentError] = useState(
    "Payment completed successfully!"
  );
  const [validInput, setvalidInput] = useState("");
  const [required, setRequired] = useState("none");

  let responseTransaction = {};

  const submitHandler = async () => {
    if (validInput != "") {
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
    } else setRequired("flex");
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
    setvalidInput("");
    setpaymentError("Payment completed successfully!");
    setCardInfo({});
  };

  const validationCard = () => {
    if (cardInfo == invalidCard) {
      setpaymentError("Invalid card!");
    }
  };
  function inputChange(e) {
    setvalidInput(e.target.value);
    setRequired("none");
  }
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
            <p style={{ display: required }}>Required field!</p>

            <NumberFormat
              value={validInput}
              onChange={inputChange}
              className="input-value"
              thousandSeparator={true}
              prefix={"$ "}
              inputmode="numeric"
              placeholder="$ 0,00"
            />

            <select
              name="card_input"
              className="input-select"
              onChange={(e) => {
                setCardInfo(e.target.value);
              }}
            >
              <option value={JSON.stringify(card)}>
                Final card {card.card_number.slice(-4)}
              </option>
              <option value={invalidCard}>
                Final card {invalidCard.card_number.slice(-4)}
              </option>
            </select>
            <button
              onClick={() => {
                // validationInputs();
                submitHandler();
                validationCard();
              }}
              type="submit"
              className="ant-btn ant-btn-primary"
            >
              Pay
            </button>
          </div>
        </>
      ) : (
        <>
          <p>Receipt of payment</p>
          <div className="ant-modal-center">
            <h3>{paymentError}</h3>
            <button className="ant-btn ant-btn-primary" onClick={finalPayment}>
              Close
            </button>
          </div>
        </>
      )}
    </ModalComponent>
  );
};

export default Modal;

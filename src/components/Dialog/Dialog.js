import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import "./Dialog.scss";
import Close from "../../assets/icons/svg icon/camera (2).svg";
import { LoginForm, RegisterForm, OTPForm, StepForm } from "../";

function Dialog({ show, onHide, type }) {
  const [currentStep, setCurrentStep] = useState(0),
    Modals = {
      login: "LOGIN",
      register: "REGISTER",
      otp: "OTP",
      step: "STEP",
    },
    ModalTitles = {
      [Modals.login]: "WELCOME BACK! PLEASE LOGIN",
      [Modals.register]: "LET'S SET UP YOUR ACCOUNT",
      [Modals.otp]: "VERIFY OTP",
      [Modals.step]: [
        "PLEASE TELL US ABOUT YOURSELF",
        "ALMOST THERE..PLEASE FILL LITTLE MORE INFORMATION",
        "PLEASE FILL FAMILY INFORMATION",
        "SEARCH YOUR MATCH",
      ],
    },
    getTitle = (type) => {
      switch (type) {
        case Modals.step:
            console.log(ModalTitles[Modals.step][currentStep],currentStep)
          return ModalTitles[Modals.step][currentStep];

        default:
          return ModalTitles[type];
      }
    },
    getModalContent = (type) => {
      switch (type) {
        case Modals.login:
          return <LoginForm close={onHide} />;
        case Modals.register:
          return <RegisterForm close={onHide} />;
        case Modals.otp:
          return <OTPForm close={onHide} />;
        case Modals.step:
          return <StepForm setActive={setCurrentStep} />;
      }
    };
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size={type === Modals.step ? "lg" : ""}
    >
      <Modal.Body className="dialog">
        <div className="dialog__header col-lg-10">
          <Image
            src={Close}
            alt="close"
            className="dialog__header__close"
            onClick={() => onHide()}
          />
          <p className="dialog__header__title">{getTitle(type)}</p>
        </div>
        <div className="dialog__content col-lg-10">{getModalContent(type)}</div>
      </Modal.Body>
    </Modal>
  );
}

export default Dialog;

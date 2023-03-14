import React, { useState } from "react";
import { ModalWrapper, Overlay, StyledModal } from "./styled";
import { Button } from "@/modules/Atoms";
import { Form } from "@/modules/Molecules";

const Modal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex gap-5 ">
        <Button buttonType="primary" onClick={() => setShowModal(true)}>
          Consulenza gratuita
        </Button>
      </div>
      {showModal ? (
        <ModalWrapper>
          <Overlay>
            <StyledModal>
              <h2>Hi! Please fill out the fields below👇🏻</h2>
              <p>
                You will be contacted shortly by one of our salespeople. We will
                help you figure out what is the best solution for your business
                or PA!
              </p>
              <Form />
              <Button buttonType="close" onClick={() => setShowModal(false)} />
            </StyledModal>
          </Overlay>
        </ModalWrapper>
      ) : null}
    </div>
  );
};

export default Modal;

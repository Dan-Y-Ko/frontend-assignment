import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalBackdropStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(1px);
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalPortal = ({ setModalVisible, children }) => {
  return ReactDOM.createPortal(
    <ModalBackdropStyled onClick={() => setModalVisible(false)}>
      {children}
    </ModalBackdropStyled>,
    document.querySelector("#modal")
  );
};

export default ModalPortal;

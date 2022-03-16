import React from "react";
import { CSSTransition } from "react-transition-group";
//this is not an official react library but it is an alternate create animation effect
// import { CSSTransition } from "react-transition-group";

import "./modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
const Modal = (props) => {
  const { onClose, show } = props;
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      //classNames provides us with multiple classes to apply to the element based on the state of the animation
      //such as entering, exiting, and entered
      // classNames='fade-slide' so this will provide us with the classes fade-slide-enter, fade-slide-exit, and fade-slide-enter-active
      //there is another way to describe what classes to use in cssTransition
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button onClick={onClose} className="button">
          Close
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;

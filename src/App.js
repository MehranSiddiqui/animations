import "./App.css";
import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Backdrop from "./components/Backdrop.js/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Button from "./components/common/Button";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };
  const showBlock = () => {
    setIsBlock((prev) => {
      return !prev;
    });
  };

  return (
    <div className="App">
      <h1>React Animation</h1>
      <button onClick={showBlock}>Toggle</button>

      {/* HOw TO USE REACT_TRANSITION_GROUP*/}
      <Transition
        in={isBlock}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => (
          <div
            style={{
              margin: "auto",
              backgroundColor: "red",
              width: 100,
              height: 100,
              transition: "all 1s ease-in-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          />
        )}
      </Transition>
      {/* HOw TO USE REACT_TRANSITION_GROUP*/}
      <Modal show={isVisible} onClose={hideModal} />
      <Backdrop />
      <Button onShow={showModal}>Show Modal</Button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;

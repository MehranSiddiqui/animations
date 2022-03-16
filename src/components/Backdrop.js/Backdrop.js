import React from "react";

const Backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClose",
  ];
  return <div className={cssClasses.join("")}>Backdrop</div>;
};

export default Backdrop;

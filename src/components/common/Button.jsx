import React from "react";

const Button = (props) => {
  const { onShow , children} = props;
  return (
    <button className="button" onClick={onShow}>
     {children}
    </button>
  );
};

export default Button;

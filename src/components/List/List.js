import React, { useState } from "react";
import "./list.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const List = () => {
  const [list, setList] = useState([1, 2, 3]);
  const addItemHandler = () => {
    setList((prev) => {
      return [...prev, prev[prev.length - 1] + 1];
    });
  };
  const handleRemoveItem = (id) => {
    setList((prev) => {
      return prev.filter((i) => i !== id);
    });
  };

  return (
    <>
      <div>
        <TransitionGroup component="ul" className="list">
          {list.map((item, index) => (
            //the Css transition is applied to the list element
            <CSSTransition key={index} classNames="fade" timeout={300}>
              <li
                id={index}
                className="listItem"
                onClick={handleRemoveItem.bind(this, index + 1)}
              >
                {item}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <div>
        <button onClick={addItemHandler} className="button">
          Add Item
        </button>
      </div>
    </>
  );
};

export default List;

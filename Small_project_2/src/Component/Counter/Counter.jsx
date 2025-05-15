import React, { useState } from "react";

const Counter = () => {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];
  const addValueHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition(position + 1);
  };
  const decrement = () => addValueHistory(currentValue - 1);
  const increment = () => addValueHistory(currentValue + 1);
  const randomIncrement = () =>
    addValueHistory(currentValue + Math.floor(Math.random() * 10));
  const randomDecrement = () =>
    addValueHistory(currentValue - Math.floor(Math.random() * 10));

  const undo = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  const redo = () => {
    if (position < history.length - 1) {
      setPosition(position + 1);
    }
  };
  console.log(history, position);
  return (
    <div>
      <div>
        <h1>Counter With Undo and redo</h1>
        <div>{currentValue}</div>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={randomIncrement}>Random Plus</button>
          <button onClick={randomDecrement}>Random Minus</button>
        </div>
        <div className="">
          <button disabled={position === 0} onClick={undo}>
            Undo
          </button>
          <button disabled={position === history.length - 1} onClick={redo}>
            Redo
          </button>
        </div>
        <div>
          {position}/{history.length - 1}
        </div>
      </div>
    </div>
  );
};

export default Counter;

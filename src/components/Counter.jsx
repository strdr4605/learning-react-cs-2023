import React, { useState } from "react";
import Button from "./Button";

export default function Counter({ step, maxValue }) {
  const [counter, setCounter] = useState(0);

  function decrement() {
    const newCounter = counter - (step || 1);
    setCounter(newCounter);
  }

  const increment = () => {
    const newCounter = counter + (step || 1);
    setCounter(newCounter);
  };

  const showIncButton = maxValue === undefined || counter < maxValue;

  return (
    <div className="border border-2 border-red-400 p-2 m-2">
      <h1>Counter: {counter}</h1>
      <Button onClick={() => decrement()}>-{step || 1}</Button>
      {showIncButton ? (
        <Button onClick={() => increment()}>+{step || 1}</Button>
      ) : (
        <span>Max value reached</span>
      )}
    </div>
  );
}
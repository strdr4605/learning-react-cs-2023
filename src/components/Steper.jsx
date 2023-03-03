import React, { useState } from "react";
import Button from "./Button";

export default function Steper(props) {
  const { step, maxValue, onChange } = props;
  const [innerStep, setInnerStep] = useState(1);

  function decrement() {
    const newStep = innerStep - 1;
    setInnerStep(newStep);
    onChange(newStep);
  }

  function increment() {
    const newStep = innerStep + 1;
    setInnerStep(newStep);
    onChange(newStep);
  }

  const showIncButton = maxValue === undefined || innerStep < maxValue;

  return (
    <div className="border border-2 border-blue-400 p-2 m-2">
      <h1>Step: {innerStep}</h1>
      {innerStep > 1 && (
        <Button onClick={() => decrement()}>-{step || 1}</Button>
      )}
      {showIncButton ? (
        <Button onClick={() => increment()}>+{step || 1}</Button>
      ) : (
        <span>Max value reached</span>
      )}
    </div>
  );
}
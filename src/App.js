import React, { useState } from "react";
import Counter from "./components/Counter";
import Steper from "./components/Steper";
import "./App.css";
import Button from "./components/Button";

function useAppState({ defaultStep, defaultLiked }) {
  const [step, setStep] = useState(defaultStep);
  const [liked, setLiked] = useState(defaultLiked);

  return {
    step: step * 2,
    setStep,
    liked,
    setLiked,
  };
}

function App(props) {
  const { step, setStep, liked, setLiked } = useAppState({
    defaultStep: 4,
    defaultLiked: true,
    
  });

  return (
    <div className="flex">
      <FunctionalCounter />
      <Counter step={step} />
      <Steper onChange={(value) => setStep(value)} maxValue={3} />
      {!liked ? (
        <Button onClick={() => setLiked(true)}>Like me</Button>
      ) : (
        <span>you liked</span>
      )}
    </div>
  );
}

export default App;
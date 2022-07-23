import React from "react";
import "./counter.css";
import Marker from "./Marker";

const Counter = () => {
  console.log("COUNTER RENDER")
  const [counter, setCounter] = React.useState(0);
  const [shouldWeProceed, setShouldWeProceed] = React.useState(true);

  const increase = () => {
    if (counter === 10) {
      setCounter("Counter stopped");
      setShouldWeProceed(false);
      return;
    }
    if (shouldWeProceed === true) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter === 0) return;
    if (shouldWeProceed === true) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Marker counter={counter} />
      <button onClick={increase}> increase</button>
      <button onClick={decrease}> decrease</button>
    </div>
  );
};

export default Counter;

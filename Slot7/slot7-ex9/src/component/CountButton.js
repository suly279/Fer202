import React, { useState } from "react";

const CounterDisplay = ({ count }) => (
  <h2>Counter: {count}</h2>
);

const CounterButton = ({ label, onClick, className }) => (
  <button className={`btn ${className} m-2`} onClick={onClick}>{label}</button>
);

const CountButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-5">
      <CounterDisplay count={count} />
      <CounterButton label="Increment" onClick={() => setCount(count + 1)} className="btn-success" />
      <CounterButton label="Decrement" onClick={() => setCount(count - 1)} className="btn-danger" />
    </div>
  );
};

export default CountButton;

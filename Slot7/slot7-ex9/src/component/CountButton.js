import React, { useState } from "react";

const CountButton = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="text-center mt-5">
        <h2>Counter: {count}</h2>
        <button className="btn btn-success m-2" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger m-2" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  };

  export default CountButton;
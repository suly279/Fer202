import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-4 shadow-sm" style={{ backgroundColor: "#ffccd5" }}>
      <p className="text-center">Bạn đã nhấn {count} lần</p>
      <button 
        className="btn btn-light w-50 mx-auto"
        onClick={() => setCount(count + 1)}
      >
        Nhấn tôi
      </button>
    </div>
  );
}

export default Counter;
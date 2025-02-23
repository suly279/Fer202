import React, { useState } from 'react';
import Counter from './component/Counter';
import ProductList from './component/ProductList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState('Suly');
  const [age, setAge] = useState(20);

  return (
    <div className="container mt-4">
      <Counter />
      <div className="card p-4 shadow-sm mt-3" style={{ backgroundColor: "#ffccd5" }}>
        <input
          type="text"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Tên của tôi là {name}</p>

        <input
          type="number"
          className="form-control mb-2"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
        />
        <p>Tuổi của tôi là {age}</p>
      </div>
      <ProductList />
    </div>
  );
}

export default App;

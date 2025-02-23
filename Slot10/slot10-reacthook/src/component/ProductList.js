import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Cushion' },
    { id: 2, name: 'Powder' },
    { id: 3, name: 'Lipstick' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div className="card p-4 shadow-sm" style={{ backgroundColor: "#ffccd5" }}>
      {products.map(product => (
        <div key={product.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor={product.id}>{product.name}</label>
        </div>
      ))}
      {selectedProducts.length > 0 && (
        <p className="mt-3">Bạn đã chọn: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}</p>
      )}
    </div>
  );
}

export default ProductList;
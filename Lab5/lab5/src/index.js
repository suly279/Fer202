import React from 'react';
import ReactDOM from 'react-dom/client';  // Thay đổi từ 'react-dom'
import App from './App';
import './index.css';

// Tạo root container mới
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app vào container root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

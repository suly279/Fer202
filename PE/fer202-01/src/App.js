import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login"; 
import LaptopManagement from "./components/LaptopManagement";
import LaptopDetail from "./components/LaptopDetail";


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Đang tải...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/laptops" element={<LaptopManagement />} />
          <Route path="/laptops/:id" element={<LaptopDetail />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
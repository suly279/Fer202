import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => (
  <div className="d-flex justify-content-around w-100" style={{ textAlign: "center" }}>
    <span style={{ color: "white", fontSize: "2rem" }}>Pizza House</span>
    <Link to="/" className="text-white">Home</Link>
    <Link to="/about" className="text-white">About Us</Link>
    <Link to="/contact" className="text-white">Contact</Link>
  </div>
);

const SearchBar = () => (
  <div style={{ textAlign: "center" }}>
    <input type="text" className="form-control d-inline w-50" placeholder="Search" />
    <button className="btn btn-light ms-2">🔍</button>
  </div>
);

const Nav = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4" style={{ backgroundColor: "#333333", height: "50px" }}>
      <NavLinks />
      <SearchBar />
    </nav>
  );
};

export default Nav;

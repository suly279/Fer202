import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item mx-3"><a className="nav-link" href="#">Home</a></li>
    <li className="nav-item mx-3"><a className="nav-link" href="#">About Us</a></li>
    <li className="nav-item mx-3"><a className="nav-link" href="#">Contact</a></li>
  </ul>
);

const SearchBar = () => (
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-danger" type="submit">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#" style={{ fontSize: "2rem" }}>Pizza House</a>
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <NavLinks />
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import fpt from "../image/fpt.png";

const Header = () => (
  <div style={{ backgroundColor: "#EA8F2E", padding: "10px 0 0 0" }} className="text-center">
    <img src={fpt} alt="FPT University" className="img-fluid" style={{ maxWidth: "300px" }} />
  </div>
);

const Navigation = () => (
  <div style={{ backgroundColor: "#EA8F2E" }} className="text-center py-2">
    <nav>
      <a style={{ textDecoration: "none" }} href="#home" className="mx-3 text-light">Home</a>
      <a style={{ textDecoration: "none" }} href="#about" className="mx-3 text-light">About</a>
      <a style={{ textDecoration: "none" }} href="#contact" className="mx-3 text-light">Contact</a>
    </nav>
  </div>
);

const ContentSection = ({ id, title, text }) => (
  <div className="container text-center my-4">
    <h2 id={id}>{title}</h2>
    <p>{text}</p>
  </div>
);

const Footer = () => (
  <div style={{ backgroundColor: "#F1C980", marginBottom: "50px" }} className="text-center text-light py-3">
    <p>© 2023 Website. All rights reserved.</p>
  </div>
);

const Ex5 = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Header />
      <Navigation />
      <ContentSection id="about" title="About" text="This is the about section of the website." />
      <ContentSection id="contact" title="Contact" text="For any inquiries, please contact us at example@example.com." />
      <Footer />
    </div>
  );
};

export default Ex5;

import React from "react";
import fpt from "../image/fpt.png";

const CardImage = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: "200px", height: "auto" }} />
);

const CardContent = ({ name, mobile }) => (
  <div className="ms-3">
    <h5 className="fw-bold text-center">{name}</h5>
    <p className="text-muted mb-0 text-center">Mobile: {mobile}</p>
  </div>
);

const CardFPT = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card shadow-lg p-3" style={{ width: "600px", height: "150px" }}>
        <div className="d-flex align-items-center">
          <CardImage src={fpt} alt="FPT Education Logo" />
          <CardContent name="Hoai Nguyen - FPT DaNang" mobile="0982827763" />
        </div>
      </div>
    </div>
  );
};

export default CardFPT;

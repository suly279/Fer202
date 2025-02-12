import React from "react";
import fpt from "../image/fpt.png";

const CardFPT = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card shadow-lg p-3" style={{ width: "600px", height: "150px" }}>
        <div className="d-flex align-items-center">
          <img src={fpt} alt="FPT Education Logo" style={{ width: "200px", height: "auto" }}/>
          <div className="ms-3">
            <h5 className="fw-bold text-center">Hoai Nguyen - FPT DaNang</h5>
            <p className="text-muted mb-0 text-center">Mobile: 0982827763</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFPT;

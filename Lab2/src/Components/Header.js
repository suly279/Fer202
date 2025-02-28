import React from "react";
import pizza1 from "../Pizza_Images/pizza1.jpg";
import pizza2 from "../Pizza_Images/pizza2.jpg";
import pizza3 from "../Pizza_Images/pizza3.jpg";
import pizza4 from "../Pizza_Images/pizza4.jpg";
import pizza5 from "../Pizza_Images/pizza5.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min";

const images = [pizza1, pizza2, pizza3, pizza4, pizza5];

const CarouselItem = ({ image, index }) => (
  <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="3000">
    <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ height: "500px", objectFit: "cover" }} />
    <div className="carousel-caption d-none d-md-block">
      <h1>Neapolitan Pizza</h1>
      <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
    </div>
  </div>
);

const CarouselIndicators = ({ count }) => (
  <div className="carousel-indicators">
    {Array.from({ length: count }).map((_, index) => (
      <button key={index} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
    ))}
  </div>
);

const CarouselControls = () => (
  <>
    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </>
);

const Header = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <CarouselItem key={index} image={image} index={index} />
        ))}
      </div>
      <CarouselControls />
      <CarouselIndicators count={images.length} />
    </div>
  );
};

export default Header;

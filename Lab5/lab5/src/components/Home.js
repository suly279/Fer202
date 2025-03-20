import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <div>
      <h2 className="text-center my-4">Welcome to Suly's Site!</h2>
      
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="/images/slide1.jpg" className="d-block w-100" alt="Slide 1" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/images/slide2.jpg" className="d-block w-100" alt="Slide 2" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/images/slide3.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
      </div>


      <div className="image-gallery d-flex justify-content-between my-4">
        <img src="images/menu-01.jpg" alt="1" className="rounded-circle" />
        <img src="images/menu-02.jpg" alt="2" className="rounded-circle" />
        <img src="images/menu-03.jpg" alt="3" className="rounded-circle" />
        <img src="images/menu-04.jpg" alt="4" className="rounded-circle" />
        <img src="images/menu-05.jpg" alt="5" className="rounded-circle" />
        <img src="images/menu-06.jpg" alt="6" className="rounded-circle" />
      </div>


      <p className="text-center">This is Home Page</p>
    </div>
  );
};

export default Home;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import anh1 from "./image/anh1.png";
import anh2 from "./image/anh2.png";
import anh3 from "./image/anh3.png";
import anh4 from "./image/anh4.png";
import fpt from "./image/fpt.png";
import anh5 from "./image/anh5.png";
import tuiii from "./image/tuiii.jpg";



const EX5Demo = () => {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>

      <div style={{ backgroundColor: "#E9ECEF" }} className="p-3 text-dark">
        <h1 style={{ margin: "30px" }}>Let's test the grid!</h1>
      </div>

      <div className="container mt4">
        <div className="row mt-3">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-6 text-dark border border-dark p-3">First col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-6 text-dark border border-dark p-3">Second col</div>
        </div>
        <div className="row mt-2">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
        </div>
        <div className="row mt-2">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
        </div>
      </div>

      <div style={{ backgroundColor: "#D2C5C5" }} className="mt-4 p-4 text-center text-dark">
        <h1>Created by ABC!</h1>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------------- */}

      <div style={{ backgroundColor: "#E9ECEF", margin: "50px 0 0 0" }} className="p-3 text-center text-dark">
        <h1 style={{ margin: "30px" }}>My First Bootstrap Page</h1>
      </div>

      <div style={{ margin: "100px" }} className="row mt-4 justify-content-center align-items-center text-center">
        <div className="col-md-4">
          <img src={anh1} alt="HTML5" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={anh2} alt="CSS3" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={anh3} alt="Bootstrap" className="img-fluid" />
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------------- */}


      <div style={{ backgroundColor: "#E9ECEF" }} className="p-3 text-dark">
        <h1 style={{ margin: "30px" }}>Let's test the grid!</h1>
      </div>

      <div class="container-s py-3">
        <div class="d-flex ">
          <a href="" class="text-decoration-none mx-3">Active</a>
          <a href="" class="text-decoration-none mx-3 active">Link</a>
          <a href="" class="text-decoration-none mx-3 disabled">Link</a>
          <a href="" class="text-decoration-none text-muted mx-3">Disable</a>
        </div>
      </div>

      <div className="container mt4">
        <div className="row mt-3">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-6 text-dark border border-dark p-3">First col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-6 text-dark border border-dark p-3">Second col</div>
        </div>
        <div className="row mt-2">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-4 text-dark border border-dark p-3">col</div>
        </div>
        <div className="row mt-2">
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
          <div style={{ backgroundColor: "#D3D3D3", }} className="col-md-3 text-dark border border-dark p-3">col</div>
        </div>
      </div>

      <div style={{ backgroundColor: "#D2C5C5", marginBottom: "50px" }} className="mt-4 p-4 text-center text-dark">
        <h1>Created by ABC!</h1>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------------- */}


      <div style={{ backgroundColor: "#EA8F2E", padding: "10px 0 0 0" }} className="text-center">
        <img
          src={anh4}
          alt="FPT University"
          className="img-fluid"
          style={{ maxWidth: "300px" }}
        />
      </div>

      <div style={{ backgroundColor: "#EA8F2E" }} className="text-center py-2">
        <nav>
          <a style={{ textDecoration: "none" }} href="#home" className="mx-3 text-light">Home</a>
          <a style={{ textDecoration: "none" }} href="#about" className="mx-3 text-light">About</a>
          <a style={{ textDecoration: "none" }} href="#contact" className="mx-3 text-light">Contact</a>
        </nav>
      </div>

      <div className="container text-center my-4">
        <h2 id="about">About</h2>
        <p>This is the about section of the website.</p>

        <h2 id="contact">Contact</h2>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </div>

      <div style={{ backgroundColor: "#F1C980", marginBottom: "50px" }} className="text-center text-light py-3">
        <p>© 2023 Website. All rights reserved.</p>
      </div>

      {/* -------------------------------------------------------------------------------------------- */}

      <div>
        <Container fluid style={{backgroundColor:"#EACDAD"}} className="py-2">
          <Row style={{margin: "20px"}} className="align-items-center">
            <Col md={9} className="d-flex">
              <img
                src={fpt}
                className="mt-2 ps-5"
                alt="FPT Logo"
                style={{ height: "100px" }}
              />

              <div className="d-flex mt-2 ps-2 navbar-container">
                {[
                  { name: "Trang Chủ", icon: "fas fa-home" },
                  { name: "Ngành Học", icon: "fas fa-info-circle" },
                  { name: "Tuyển Sinh", icon: "fas fa-id-card" },
                  { name: "Sinh Viên", icon: "fas fa-list" }
                ].map((item, index) => (
                  <a key={index} href="#" className="nav-link-custom">
                    <i className={`${item.icon} me-2`}></i>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </Col>

            <Col md={3}>
              <div className="d-flex mt-4 align-items-center">
                <div className="pe-2">Search:</div>
                <Form.Control type="text" className="ps-2 btn-outline-primary border-primary rounded-0" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{backgroundColor:"#F38F31"}} className="py-4 text-center">
          <img
            src={anh5}
            alt="Banner"
            className="w-75"
          />
        </Container>

        <Container className="py-3 text-left">
          <span style={{ backgroundColor: "#E5E8EF", padding: "10px 20px"}} className="text-warning btn-outline-primary border-primary rounded-1">
            Home <span className="text-dark"> / Student</span>
          </span>
        </Container>

        <Container className="text-center mt-5">
          <h1 className="fw-bold">Student Detail</h1>
        </Container>

        <Container className="mb-5">
          <Row className="ps-5 ms-5 me-5 pe-5">
            {[1, 2, 3, 4].map((id) => (
              <Col md={6} key={id}>
                <div style={{borderColor: "gray", borderRadius:"5px"}} className="border p-3">
                  <img src={tuiii} className="w-100" alt="Student"/>
                  <div className="text-center mt-3">DS180213</div>
                  <div className="d-flex justify-content-between align-items-center mt-3 px-3">
                    <div>Do Thi Thu Ngan</div>
                    <div>Da Nang</div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Form.Check type="radio" label="Present" name={`attendance${id}`} className="me-5" />
                    <Form.Check type="radio" label="Absent" name={`attendance${id}`} className="ms-5" />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button style={{backgroundColor:"#F38F31", borderColor: "gray", borderRadius:"5px"}} variant="warning" className="text-white">Submit</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Container fluid style={{backgroundColor:"#F38F31"}} className="py-4">
          <Row>
            <Col md={7} className="ms-5 mt-3">
              <h3 className="fw-bold">Our Address</h3>
              <p>Khu đô thị FPT Đà Nẵng</p>
              <div className="d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="me-2" alt="" style={{ width: "24px" }} />
                <span>+8402311111</span>
              </div>
              <div className="d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="me-2" alt="" style={{ width: "24px" }} />
                <span>+852 8765 4321</span>
              </div>
              <div className="d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" className="me-2" alt="" style={{ width: "24px" }} />
                <a href="mailto:fptudn@fpt.edu.vn" className="text-decoration-none">fptudn@fpt.edu.vn</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex mt-5">
                {[
                  "https://cdn-icons-png.flaticon.com/512/2111/2111483.png",
                  "https://cdn-icons-png.flaticon.com/512/20/20837.png",
                  "https://cdn-icons-png.flaticon.com/512/80/80963.png",
                  "https://cdn-icons-png.flaticon.com/512/733/733635.png",
                  "https://cdn-icons-png.flaticon.com/512/49/49084.png",
                  "https://cdn-icons-png.flaticon.com/512/4338/4338894.png"
                ].map((icon, index) => (
                  <a key={index} href="#" className="me-2">
                    <img src={icon} alt="Social" style={{ width: "24px" }} />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              &copy; CopyWrite 2023
            </Col>
          </Row>
        </Container>
      </div>


    </div>
  );
};



function App() {
  return (
    <div>
      <EX5Demo />
    </div>
  );
}

export default App;

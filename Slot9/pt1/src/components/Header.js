import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import fpt from "../image/fpt.png";
import anh5 from "../image/anh5.png";

const Header = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#EACDAD" }} className="py-2">
        <Row style={{ margin: "20px" }} className="align-items-center">
          <Col md={9} className="d-flex">
            <img src={fpt} className="mt-2 ps-5" alt="FPT Logo" style={{ height: "100px" }} />
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
      <Container fluid style={{ backgroundColor: "#F38F31" }} className="py-4 text-center">
        <img src={anh5} alt="Banner" className="w-75" />
      </Container>

      <Container className="py-3 text-left">
          <span style={{ backgroundColor: "#E5E8EF", padding: "10px 20px"}} className="text-warning btn-outline-primary border-primary rounded-1">
            Home <span className="text-dark"> / Student</span>
          </span>
        </Container>
      
    </>
  );
};

export default Header;

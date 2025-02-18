import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: "#F38F31" }} className="py-4">
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
    );
};

export default Footer;

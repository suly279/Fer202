import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Button, ListGroup, Alert, Modal } from "react-bootstrap";

function Cart() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCheckout = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      clearCart();
      setShowModal(false);
    }, 3000);
  };

  return (
    <Container className="form-container">
      <h3>🛒 Giỏ hàng</h3>

      {showAlert && <Alert variant="success">✅ Thanh toán thành công!</Alert>}

      {cart.length === 0 ? (
        <p>Giỏ hàng trống!</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                {item.name} - ${item.price}
                <Button size="sm" variant="danger" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4 className="mt-3">Tổng tiền: ${total.toFixed(2)}</h4>

          <Button className="gradient-button me-2" onClick={handleConfirmOrder}>
            Xác nhận đơn hàng
          </Button>
          <Button className="gradient-button" onClick={clearCart}>
            Xóa giỏ hàng
          </Button>
        </>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🛍 Xác nhận đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Danh sách món ăn:</h5>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.name} - ${item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="mt-3">Tổng tiền: ${total.toFixed(2)}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button className="gradient-button" onClick={handleCheckout}>
            Thanh toán
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;

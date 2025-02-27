import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Button, ListGroup } from "react-bootstrap";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="form-container">
      <h3>🛒 Giỏ hàng</h3>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống!</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.name} - ${item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="mt-3">Tổng tiền: ${total}</h4>
          <Button className="gradient-button" onClick={clearCart}>
            Xóa giỏ hàng
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Button, ListGroup } from "react-bootstrap";

const dishes = [
  { id: 1, name: "🍕 Pizza", price: 10 },
  { id: 2, name: "🍔 Burger", price: 8 },
  { id: 3, name: "🍣 Sushi", price: 12 },
];

function DishesList() {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="form-container">
      <h3>Danh sách món ăn</h3>
      <ListGroup>
        {dishes.map((dish) => (
          <ListGroup.Item key={dish.id} className="d-flex justify-content-between">
            {dish.name} - ${dish.price}
            <Button size="sm" onClick={() => addToCart(dish)} className="gradient-button">
              Thêm vào giỏ
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default DishesList;

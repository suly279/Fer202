import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Button, Card, Row, Col, Form } from "react-bootstrap";
import pizza from "../image/pizza.webp"
import zuchi from "../image/zuchi.jpg"
import donut from "../image/donut.jpg"
import cake from "../image/cake.jpg"

const dishes = [
  {
    id: 1,
    name: "Uthappizza",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
    price: 4.99,
    image: pizza,
  },
  {
    id: 2,
    name: "Zucchipakoda",
    description: "Deep fried Zucchini with chickpea batter.",
    price: 1.99,
    image: zuchi,
  },
  {
    id: 3,
    name: "Vadonut",
    description: "A combination of vada and donut. A very yummy donut.",
    price: 1.99,
    image: donut,
  },
  {
    id: 4,
    name: "ElaiCheese Cake",
    description: "New York Style Cheesecake with Indian cardamoms.",
    price: 2.99,
    image: cake,
  },
];

function DishesList() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="form-container">
      <h3>Danh sách món ăn</h3>

      <Form.Control
        type="text"
        placeholder="Tìm món ăn..."
        className="custom-input mt-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row className="mt-3">
        {filteredDishes.length === 0 ? (
          <p>Không tìm thấy món ăn phù hợp!</p>
        ) : (
          filteredDishes.map((dish) => (
            <Col md={3} key={dish.id} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={dish.image} className="fixed-image" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text className="flex-grow-1">{dish.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${dish.price}
                  </Card.Text>
                  <Button size="sm" onClick={() => addToCart(dish)} className="gradient-button mt-auto">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default DishesList;

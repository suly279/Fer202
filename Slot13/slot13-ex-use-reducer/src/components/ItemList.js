import React, { useReducer, useState } from "react";
import { Container, Button, ListGroup, Form } from "react-bootstrap";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

function ItemList() {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [input, setInput] = useState("");

  return (
    <Container className="form-container">
      <h3>Danh sách Item</h3>
      <Form.Control
        type="text"
        placeholder="Nhập Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={() => dispatch({ type: "ADD_ITEM", payload: input })}>Thêm</Button>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>
            {item}
            <Button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}>Xóa</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ItemList;

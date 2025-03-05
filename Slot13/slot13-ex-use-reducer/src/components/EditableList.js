import React, { useReducer, useState } from "react";
import { Container, Button, ListGroup, Form } from "react-bootstrap";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { text: action.payload, isEditing: false, createdAt: new Date() }];
    case "REMOVE_ITEM":
      return state.filter((_, index) => index !== action.payload);
    case "EDIT_ITEM":
      return state.map((item, index) =>
        index === action.payload ? { ...item, isEditing: true } : item
      );
    case "SAVE_ITEM":
      return state.map((item, index) =>
        index === action.payload.index ? { ...item, text: action.payload.text, isEditing: false } : item
      );
    case "SORT_ALPHABETICAL":
      return [...state].sort((a, b) => a.text.localeCompare(b.text));
    case "SORT_BY_TIME":
      return [...state].sort((a, b) => a.createdAt - b.createdAt);
    default:
      return state;
  }
};

function EditableList() {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD_ITEM", payload: input });
      setInput(""); 
    }
  };

  return (
    <Container className="form-container">
      <h3>Chỉnh sửa danh sách Item</h3>

      <Form.Control
        type="text"
        placeholder="Nhập Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button className="mt-2" onClick={handleAddItem}>Thêm</Button>

      <Form.Control
        type="text"
        placeholder="Tìm kiếm Item..."
        className="mt-3"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="d-flex gap-2 mt-2 justify-content-center">
        <Button onClick={() => dispatch({ type: "SORT_ALPHABETICAL" })}>Sắp xếp A-Z</Button>
        <Button onClick={() => dispatch({ type: "SORT_BY_TIME" })}>Sắp xếp theo thời gian</Button>
      </div>

      <ListGroup className="mt-3">
        {items
          .filter((item) => item.text.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between">
              {item.isEditing ? (
                <Form.Control
                  type="text"
                  defaultValue={item.text}
                  onBlur={(e) => dispatch({ type: "SAVE_ITEM", payload: { index, text: e.target.value } })}
                  autoFocus
                />
              ) : (
                <>
                  {item.text}
                  <div>
                    <Button size="sm" onClick={() => dispatch({ type: "EDIT_ITEM", payload: index })}>✏️</Button>
                    <Button size="sm" variant="danger" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}>❌</Button>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
}
export default EditableList;

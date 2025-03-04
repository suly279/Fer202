import React, { useReducer } from "react";
import { Container, Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  age: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function NameAgeForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <Container className="form-container">
      <h3>Nhập thông tin</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên"
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tuổi"
            value={state.age}
            onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })}
          />
        </Form.Group>

        <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </Button>
      </Form>

      <h4 className="mt-3">Kết quả:</h4>
      <p>Tên: {state.name || "Chưa nhập"}</p>
      <p>Tuổi: {state.age || "Chưa nhập"}</p>
    </Container>
  );
}

export default NameAgeForm;

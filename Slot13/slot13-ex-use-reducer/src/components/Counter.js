import React, { useReducer } from "react";
import { Container, Button, Card } from "react-bootstrap";

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Container className="form-container">
      <Card className="counter-card">
        <Card.Body>
          <h3>Bộ đếm</h3>
          <h1 className="counter-value">{state.count}</h1>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="success" className="counter-btn" onClick={() => dispatch({ type: "INCREMENT" })}>
              ➕ Tăng
            </Button>
            <Button variant="danger" className="counter-btn" onClick={() => dispatch({ type: "DECREMENT" })}>
              ➖ Giảm
            </Button>
            <Button variant="secondary" className="counter-btn" onClick={() => dispatch({ type: "RESET" })}>
              🔄 Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Counter;

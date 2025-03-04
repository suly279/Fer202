import React, { useReducer } from "react";
import { Container, Button } from "react-bootstrap";

const questions = [
  { question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
  { question: "5 + 3 = ?", options: ["8", "7", "6"], answer: "8" },
];

const quizReducer = (state, action) => {
  switch (action.type) {
    case "ANSWER":
      return { ...state, index: state.index + 1 };
    default:
      return state;
  }
};

const initialState = { index: 0 };

function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <Container className="form-container">
      {state.index < questions.length ? (
        <>
          <h3>{questions[state.index].question}</h3>
          {questions[state.index].options.map((option) => (
            <Button key={option} onClick={() => dispatch({ type: "ANSWER" })}>
              {option}
            </Button>
          ))}
        </>
      ) : (
        <h3>Hoàn thành bài kiểm tra!</h3>
      )}
    </Container>
  );
}

export default QuizApp;

import React, { useReducer, useEffect } from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaHourglassEnd } from "react-icons/fa";

const questions = [
  { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Tolstoy", "Dostoevsky"], answer: "Shakespeare" }
];

const getStoredScores = () => {
  const storedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
  return storedScores.sort((a, b) => b - a);
};

const initialState = {
  currentIndex: 0,
  selectedOption: null,
  feedback: "",
  showNext: false,
  timer: 10,
  score: 0,
  highScores: getStoredScores(),
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "ANSWER":
      const isCorrect = action.payload === questions[state.currentIndex].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect
          ? <><FaCheckCircle color="green" /> Correct! 🎉</>
          : <><FaTimesCircle color="red" /> Incorrect! The correct answer is: {questions[state.currentIndex].answer}</>,
        showNext: true,
        score: isCorrect ? state.score + 1 : state.score,
        timer: 0,
      };
    case "TIME_UP":
      return {
        ...state,
        feedback: <><FaHourglassEnd color="orange" /> Time's up! The correct answer is: {questions[state.currentIndex].answer}</>,
        showNext: true,
        selectedOption: "TIME_UP",
        timer: 0,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        selectedOption: null,
        feedback: "",
        showNext: false,
        timer: 10,
      };
    case "FINISH":
      const updatedScores = [...state.highScores, state.score].sort((a, b) => b - a);
      localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      return {
        ...state,
        highScores: updatedScores,
      };
    case "RESET":
      return { ...initialState, highScores: state.highScores };
    case "TICK":
      return { ...state, timer: state.timer > 0 ? state.timer - 1 : 0 };
    default:
      return state;
  }
};

function AdvancedQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    if (state.timer > 0 && !state.showNext) {
      const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
      return () => clearInterval(interval);
    } else if (state.timer === 0 && !state.showNext) {
      dispatch({ type: "TIME_UP" });
    }
  }, [state.timer, state.showNext]);

  return (
    <Container className="quiz-container">
      {state.currentIndex < questions.length ? (
        <>
          <h5 className="progress-text">Question {state.currentIndex + 1} / {questions.length}</h5>
          <h3 className="question-title">{questions[state.currentIndex].question}</h3>
          <ProgressBar now={(state.timer / 10) * 100} variant={state.timer < 5 ? "danger" : "primary"} />
          <p className={`timer ${state.timer < 5 ? "red-text" : ""}`}>⏳ {state.timer}s</p>

          <div className="options-container">
            {questions[state.currentIndex].options.map((option) => {
              let buttonClass = "quiz-option";
              
              if (state.selectedOption === option && option === questions[state.currentIndex].answer) {
                buttonClass += " correct-answer";
              } else if (state.selectedOption === option && option !== questions[state.currentIndex].answer) {
                buttonClass += " wrong-answer";
              } else if (state.selectedOption === "TIME_UP" && option === questions[state.currentIndex].answer) {
                buttonClass += " correct-answer";
              }
              
              return (
                <Button
                  key={option}
                  className={buttonClass}
                  onClick={() => dispatch({ type: "ANSWER", payload: option })}
                  disabled={state.selectedOption !== null}
                >
                  {option}
                </Button>
              );
            })}
          </div>

          {state.feedback && <p className="feedback">{state.feedback}</p>}
          {state.showNext && (
            <Button className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
              Next Question
            </Button>
          )}
        </>
      ) : (
        <>
          <h3>Quiz Completed!</h3>
          <p>Your Score: {state.score} / {questions.length}</p>
          <h4>🏆 High Scores:</h4>
          <ul className="high-score-list">
            {state.highScores.slice(0, 5).map((score, index) => (
              <li key={index}>#{index + 1}: {score} / {questions.length}</li>
            ))}
          </ul>
          <Button className="finish-quiz" onClick={() => {
            dispatch({ type: "FINISH" });
            dispatch({ type: "RESET" });
          }}>
            ⏹ Finish Quiz
          </Button>
        </>
      )}
    </Container>
  );
}

export default AdvancedQuiz;
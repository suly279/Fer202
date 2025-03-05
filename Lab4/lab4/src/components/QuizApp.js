import React, { useState, useEffect } from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaHourglassEnd } from "react-icons/fa";

const quizData = [
  { question: "What is ReactJS?", options: ["A JavaScript library", "A programming language", "A database"], answer: "A JavaScript library" },
  { question: "What is JSX?", options: ["A syntax extension", "A file format", "A programming language"], answer: "A syntax extension" }
];

const getStoredScores = () => JSON.parse(localStorage.getItem("quizScores")) || [];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState(getStoredScores());
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timer > 0 && !showNext) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showNext) {
      handleTimeUp();
    }
  }, [timer, showNext]);

  const handleAnswerClick = (option) => {
    const isCorrect = option === quizData[currentQuestionIndex].answer;
    setSelectedOption(option);
    setFeedback(
      isCorrect ? 
      <><FaCheckCircle color="green" /> Correct! 🎉</> : 
      <><FaTimesCircle color="red" /> Incorrect! The correct answer is: {quizData[currentQuestionIndex].answer}</>
    );
    if (isCorrect) setScore(prev => prev + 1);
    setShowNext(true);
    setTimer(0);
  };

  const handleTimeUp = () => {
    setFeedback(<><FaHourglassEnd color="orange" /> Time's up! The correct answer is: {quizData[currentQuestionIndex].answer}</>);
    setSelectedOption("TIME_UP");
    setShowNext(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setFeedback("");
      setShowNext(false);
      setTimer(10);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    const updatedScores = [...highScores, score].sort((a, b) => b - a).slice(0, 5);
    localStorage.setItem("quizScores", JSON.stringify(updatedScores));
    setHighScores(updatedScores);
    setQuizFinished(true); 
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setFeedback("");
    setShowNext(false);
    setTimer(10);
    setScore(0);
    setQuizFinished(false); 
  };

  return (
    <Container className="quiz-container">
      {!quizFinished ? (
        <>
          <h5 className="progress-text">Question {currentQuestionIndex + 1} / {quizData.length}</h5>
          <h3 className="question-title">{quizData[currentQuestionIndex].question}</h3>
          <ProgressBar now={(timer / 10) * 100} variant={timer < 5 ? "danger" : "primary"} />
          <p className={`timer ${timer < 5 ? "red-text" : ""}`}>⏳ {timer}s</p>

          <div className="options-container">
            {quizData[currentQuestionIndex].options.map((option) => {
              let buttonClass = "quiz-option";
              if (selectedOption === option && option === quizData[currentQuestionIndex].answer) {
                buttonClass += " correct-answer";
              } else if (selectedOption === option && option !== quizData[currentQuestionIndex].answer) {
                buttonClass += " wrong-answer";
              } else if (selectedOption === "TIME_UP" && option === quizData[currentQuestionIndex].answer) {
                buttonClass += " correct-answer";
              }

              return (
                <Button
                  key={option}
                  className={buttonClass}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </Button>
              );
            })}
          </div>

          {feedback && <p className="feedback">{feedback}</p>}
          {showNext && (
            <Button className="next-button" onClick={handleNextQuestion}>
              {currentQuestionIndex + 1 < quizData.length ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </>
      ) : (
        <>
          <h3>🎉 Quiz Completed! 🎉</h3>
          <p>Your Score: {score} / {quizData.length}</p>
          <h4>🏆 High Scores:</h4>
          <ul className="high-score-list">
            {highScores.map((s, i) => (
              <li key={i}>#{i + 1}: {s} / {quizData.length}</li>
            ))}
          </ul>
          <Button className="restart-quiz" onClick={handleRestartQuiz}>
            🔄 Restart Quiz
          </Button>
        </>
      )}
    </Container>
  );
};

export default QuizApp;

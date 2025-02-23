import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const quizData = [
  {
    question: "What is my name?",
    options: ["Suly", "Sylu", "Suzi", "Zizi"],
    answer: "Suly",
  },
  {
    question: "What is 1 + 1 =?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app-container">
      {showResult ? (
        <Score score={score} totalQuestions={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default QuizApp;

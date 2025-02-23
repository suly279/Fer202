import React from "react";

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-container">
      <h2>
        Your Score: {score} out of {totalQuestions}
      </h2>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Score;

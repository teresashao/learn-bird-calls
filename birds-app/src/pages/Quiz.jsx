import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData, birdOptions } from "../data/quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const question = quizData[currentQuestion];

  const handleAnswerClick = (answer) => {
    if (showFeedback) return; // prevent clicking multiple times

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      navigate("/results", { state: { score } });
    }
  };

  const getButtonStyle = (option) => {
    if (!showFeedback) return "hover:bg-green-500";
    if (option.name === question.correctAnswer) return "bg-green-500";
    if (option.name === selectedAnswer) return "bg-red-500";
    return "text-gray-500";
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
        Question {currentQuestion + 1} of {quizData.length}
      </h1>
      <h2>
        Which bird makes this sound?
      </h2>
      <br></br>

      <audio controls src={question.audio} className="mb-6 mx-auto" />

      <div className="flex flex-wrap justify-center gap-10 mb-6 ">
        {birdOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => handleAnswerClick(option.name)}
            disabled={showFeedback}
            className={`py-3 px-2 rounded transition-all flex flex-col items-center ${getButtonStyle(
              option
            )}`}
          >
            <img
              src={option.image}
              alt={option.name}
              className="w-29 h-25 object-cover mb-2 rounded"
            />
            <span>{option.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
  <button
    onClick={handleNext}
    disabled={!showFeedback}
    className={`px-6 py-2 rounded mt-2 transition 
      ${showFeedback ? "bg-green-800 hover:bg-green-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
    >
        Next →
    </button>
    {showFeedback && (
    <p className="text-lg font-semibold mb-2">
        <br></br>
      {selectedAnswer === question.correctAnswer
        ? "✅ Correct!"
        : `❌ Oops! The correct answer was ${question.correctAnswer}.`}
    </p>
  )}
</div>

    </div>
  );
};

export default Quiz;


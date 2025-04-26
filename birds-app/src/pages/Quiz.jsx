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
    if (!showFeedback) return "bg-white hover:border-gray-950";
    if (option.name === question.correctAnswer) return "bg-green-100 border-green-500 ring-2 ring-green-500";
    if (option.name === selectedAnswer) return "bg-red-100 border-red-500 ring-2 ring-red-500";
    return "bg-gray-100 border-gray-300 text-gray-500";
  };
  
  

  return (
    <div>
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-6 ">
      
      {/* Left Column */}
      <div className="m-6 mt-29 text-center">
        <p className="text-gray-600 text-md mb-2">Not ready yet?</p>
        <button
          onClick={() => navigate("/learn")}
          className="w-40 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-sm transition cursor-pointer"
          >
          Restart Learn
        </button>
      </div>
      
      {/* Center Column */}
      <div className="p-5 mx-auto text-center rounded-xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold m-4">
          Question {currentQuestion + 1} of {quizData.length}
        </h1>
        <h2 className="text-xl">
          Which bird makes this sound?
        </h2>
        <br></br>

        <audio controls src={question.audio} className="mx-auto mb-1 w-130" />

        {showFeedback && (
          <p className="text-lg font-semibold text-center">
              <br></br>
            {selectedAnswer === question.correctAnswer
              ? "✅ Correct!"
              : `❌ The correct answer was ${question.correctAnswer}.`}
          </p>
        )}
      </div>

     
    {/* Right Column */}
    <div className="m-6 mt-36 text-center">
        <button
          onClick={handleNext}
          disabled={!showFeedback}
          className={`px-4 py-2 rounded transition
            ${showFeedback ? "bg-grass hover:bg-lightgrass text-white cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
          >
              Next →
          </button>
          
      </div>
    
    </div>
    
    <div className="max-w-6xl mx-auto mt-3 pb-10">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            {birdOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleAnswerClick(option.name)}
              disabled={showFeedback}
              className={`w-60 p-0 border cursor-pointer border-gray-300 rounded-xl shadow-sm hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col text-center overflow-hidden ${getButtonStyle(option)}`}
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-3 flex flex-col items-center space-y-1">
                <div className="text-lg font-semibold">{option.name}</div>
                <div className="italic text-sm text-gray-600">{option.scientific_name}</div>
            </div>

          </button>
          ))}
        </div>


    </div>
    </div>
  );
};

export default Quiz;


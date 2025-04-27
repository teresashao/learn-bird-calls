import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData, birdOptions } from "../data/quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

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
      setShowHint(false);
    } else {
      navigate("/results", { state: { score } });
    }
  };

  const getButtonStyle = (option) => {
    if (!showFeedback) return "bg-white hover:border-gray-400";
    if (option.name === question.correctAnswer) return "bg-green-100 border-green-500 ring ring-green-500";
    if (option.name === selectedAnswer) return "bg-red-100 border-red-500 ring ring-red-500";
    return "bg-gray-100 border-gray-300 text-gray-500";
  };

  return (
    <div>

    <div className="absolute top-27 right-21 text-center w-90">
      {showFeedback && (
            <p className="text-lg font-semibold text-center">
                <br></br>
              {selectedAnswer === question.correctAnswer
                ? "✅ Correct!"
                : `❌ The correct answer was ${question.correctAnswer}.`}
            </p>
          )}
    </div>

    <div className="m-6 text-center absolute right-45 top-45">

        <button
          onClick={handleNext}
          disabled={!showFeedback}
          className={`px-4 py-3 rounded transition font-semibold text-xl w-30 text-shadow-sm shadow-lg
            ${showFeedback ? "bg-grass hover:bg-lightgrass text-white cursor-pointer hover:scale-105" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
          >
              Next
          </button>
          
      </div>

    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-6 ">
      
      {/* Left Column */}
      <div>
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

    
      </div>

     
    {/* Right Column */}
    <div className="m-6 mt-36 text-center">
      </div>
    
    </div>
    
    <div className="max-w-6xl mx-auto mt-3 pb-10">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            {birdOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleAnswerClick(option.name)}
              disabled={showFeedback}
              className={`w-60 p-0 border cursor-pointer border-gray-300 rounded-sm shadow-sm hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col text-center overflow-hidden ${getButtonStyle(option)}`}
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-40 object-cover rounded-sm"
              />
              <div className="p-3 flex flex-col items-center space-y-1">
                <div className="text-lg font-semibold">{option.name}</div>
                <div className="italic text-sm text-gray-600">{option.scientific_name}</div>
            </div>

          </button>
          ))}
        </div>

      <div className="absolute bottom-28 left-0 m-4 text-center w-70">
        <div>
          <p className="text-gray-500 text-md mb-2">Not sure?</p>
            <button
              onClick={() => navigate("/learn")}
              className="mb-1 hover:scale-105 shadow-sm border border-gray-200 w-40 px-4 py-2 bg-white hover:bg-gray-100 text-gray-600 rounded-sm transition cursor-pointer"
              >
              Restart Learn
            </button>
          </div>
          <div>
            <button
                onClick={() => setShowHint(true)}
                className="hover:scale-105 shadow-sm border border-gray-200 w-40 px-4 py-2 bg-white hover:bg-gray-100 text-gray-600 rounded-sm transition cursor-pointer"
              >
                Show Hint
              </button>
          </div>
      </div>

      <div className="absolute left-3 bottom-12 text-center w-65 m-4">
        {showHint && (
          <p className="mt-4 text-gray-700 italic max-w-xs">{question.hint}</p>
        )}
      </div>

    </div>
    </div>
  );
};

export default Quiz;


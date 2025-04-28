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
    if (!showFeedback) return "bg-stone-50 hover:border-stone-300 hover:scale-105 duration-300 hover:shadow-xl text-stone-700";
    if (option.name === question.correctAnswer) return "bg-green-100 border-green-500 ring-2 ring-green-500 scale-105";
    if (option.name === selectedAnswer) return "bg-red-100 border-red-500 ring-2 ring-red-500 scale-105";
    return "bg-stone-100 border-stone-300 text-stone-500";
  };

  return (
    <div className=" bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background2.png')" }}
    >

    <div className="absolute top-35 right-32 text-center w-90">
      {showFeedback && (
            <p className="text-lg font-bold text-center font-nunito text-stone-800">
                <br></br>
              {selectedAnswer === question.correctAnswer
                ? "✅ Correct!"
                : `❌ The answer was ${question.correctAnswer}`}
            </p>
          )}
    </div>

    <div className="m-6 text-center absolute right-55 top-48">

        <button
          onClick={handleNext}
          disabled={!showFeedback}
          className={`font-joti px-6 py-3 rounded-3xl transition font-semibold text-2xl w-30 text-shadow-sm shadow-lg duration-300
            ${showFeedback ? "bg-green-800 hover:bg-green-700 text-white cursor-pointer hover:scale-105" : "bg-stone-400 text-stone-200 cursor-not-allowed"}`}
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
        <h1 className="font-joti text-5xl font-bold m-4">
          Question {currentQuestion + 1} of {quizData.length}
        </h1>
        <h2 className="text-2xl font-nunito font-semibold m-2">
          Which bird makes this sound?
        </h2>
        <br></br>

        <audio controls src={question.audio} className="mx-auto w-130" />

    
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
              className={`w-60 p-0 cursor-pointer rounded-4xl shadow-sm transition-transform transform  flex flex-col text-center overflow-hidden ${getButtonStyle(option)}`}
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-40 object-cover rounded-sm"
              />
              <div className="p-3 flex flex-col items-center space-y-1">
                <div className="text-lg font-semibold font-joti">{option.name}</div>
                <div className="italic text-sm font-nunito font-semibold">{option.scientific_name}</div>
            </div>

          </button>
          ))}
        </div>

      <div className="absolute bottom-22 left-0 m-4 text-center w-70">
        <div>
          <p className="text-stone-600 text-md font-bold mb-2 font-nunito text-lg">Not sure?</p>
            <button
              onClick={() => navigate("/learn")}
              className="text-md font-joti mb-2 hover:scale-105 duration-300 shadow-md border border-stone-50 w-40 px-6 py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-3xl transition cursor-pointer"
              >
              Restart Learn
            </button>
          </div>
          <div>
            <button
                onClick={() => setShowHint(true)}
                className="text-md font-joti hover:scale-105 duration-300 shadow-md border border-stone-50 w-40 px-4 py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-3xl transition cursor-pointer"
              >
                Show Hint
              </button>
          </div>
      </div>

      <div className="absolute left-3 bottom-4 text-center w-65 m-4">
        {showHint && (
          <p className="font-nunito text-stone-600 font-semibold italic max-w-xs text-lg">{question.hint}</p>
        )}
      </div>

    </div>
    </div>
  );
};

export default Quiz;


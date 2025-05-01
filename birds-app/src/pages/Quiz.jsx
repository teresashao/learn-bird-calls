import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData, birdOptions } from "../data/quizData";
import { useEffect } from "react";

const Quiz = () => {
  const savedProgress = JSON.parse(localStorage.getItem("quizProgress"));

  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [selectedAnswer, setSelectedAnswer] = useState(savedProgress?.selectedAnswer || null);
  const [showFeedback, setShowFeedback] = useState(savedProgress?.showFeedback || false);
  const [score, setScore] = useState(savedProgress?.score || 0);
  const [showHint, setShowHint] = useState(false);


  const navigate = useNavigate();
  const question = quizData[currentQuestion];
  const [loading, setLoading] = useState(false);

  const handleRestartClick = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);

      if (data.message) {
        navigate("/learn");
      } else {
        alert("Backend connection failed.");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("quizProgress", JSON.stringify({
      currentQuestion,
      score,
      selectedAnswer,
      showFeedback,
    }));
  }, [currentQuestion, score, selectedAnswer, showFeedback]);
  

  const handleAnswerClick = (answer) => {
    if (showFeedback) return; // prevent clicking multiple times

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === question.correctAnswer) {
      setScore((prev) => Math.min(prev + 1, 7));
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
      localStorage.removeItem("quizProgress");
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
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background1.png')" }}
    >

   

    <div className="grid gap-4 px-6 flex-grow items-center justify-center">
      
      
      {/* Center Column */}
      <div className="p-5 mx-auto text-center rounded-xl max-w-4xl w-full">
        <h1 className="font-joti text-5xl font-bold m-4">
          Question {currentQuestion + 1} of {quizData.length}
        </h1>
        <h2 className="text-2xl font-nunito font-semibold m-2">
          Which bird makes this sound?
        </h2>
        <br></br>

        <div className="flex flex-wrap justify-center">
          <audio controls src={question.audio} className="mx-10 w-140 sm:100 mb-4" />
          <button
            onClick={handleNext}
            disabled={!showFeedback}
            className={`font-joti px-6 py-3 mb-3 rounded-3xl transition font-semibold text-2xl w-30 text-shadow-sm shadow-lg duration-300
              ${showFeedback ? "bg-green-800 hover:bg-green-700 text-white cursor-pointer hover:scale-105" : "bg-stone-400 text-stone-200 cursor-not-allowed"}`}
            >
                Next
            </button>

        </div>
        <div className="text-center flex justify-center">
              {showFeedback && (
              <p className="text-lg font-bold text-center font-nunito text-stone-800">
              {selectedAnswer === question.correctAnswer
                ? "✅ Correct!"
                : `❌ The answer was ${question.correctAnswer}`}
              </p>
              )}
           </div>

    
      </div>

    
    </div>
    
    <div className="max-w-6xl mx-auto pb-10">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            {birdOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleAnswerClick(option.name)}
              disabled={showFeedback}
              className={`w-60 p-0 cursor-pointer rounded-4xl shadow-sm transition-transform transform flex flex-col text-center overflow-hidden ${getButtonStyle(option)}`}
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

        <div className="flex flex-col items-center p-4 gap-2 grid grid-cols-[1fr_1fr_1fr]">
          {/* Left Column */}
          <div>{showHint && (
              <p className="text-center font-nunito text-stone-600 font-semibold italic p-1 mt-2 ml-2 text-lg">
                {question.hint}
              </p>
            )}
          </div>

          {/* Middle Column */}
          <div>
            <p className="text-center text-stone-600 text-md font-bold mb-2 font-nunito text-lg">Not sure?</p>
        
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setShowHint(true)}
                className="text-md font-joti hover:scale-105 duration-300 shadow-md w-40 px-4 py-3 bg-stone-50 hover:bg-stone-200 text-stone-600 rounded-3xl transition cursor-pointer"
              >
                Show Hint
              </button>
              <button
                onClick={handleRestartClick}
                disabled={loading}
                className="text-md font-joti hover:scale-105 duration-300 shadow-md w-40 px-6 py-3 bg-stone-50 hover:bg-stone-200 text-stone-600 rounded-3xl transition cursor-pointer"
              >
                Restart Learn
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            
          </div>

        </div>


    </div>
    </div>
  );
};

export default Quiz;


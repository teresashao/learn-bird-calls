import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import rockPigeon from "/frontpigeon.png";
import crow from "/crowflying.webp";

const QuizResults = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  useEffect(() => {
    // Send the score to Flask backend
    fetch("http://localhost:5001/log_score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score }),
    })
    .then(response => response.json())
    .then(data => console.log("Score logged:", data))
    .catch(error => console.error("Error logging score:", error));
  }, [score]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background1.png')" }}
    >

      {/* Bird Image  */}
      <div className="absolute top-0 right-0 m-10">
        <img src={crow} alt="crow" className="w-60 h-auto" />
      </div>

      

      <div className="relative mb- max-w-5xl w-full h-auto flex flex-col md:flex-row items-center justify-between bg-stone-50 p-8 rounded-3xl p-15 shadow-lg border border-stone-50">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 font-joti">Quiz Complete!</h1>
          <p className="text-3xl font-nunito mb-6 text-gray-600 mt-5 font-bold">You scored <span className="text-green-800 font-bold">{score} out of 7</span> correct.</p>
        </div>

        {/* Button Section */}
        <div className="z-1 mt-6 md:mt-0 flex flex-col items-center">
          <div className="m-2">
          <Link to="/quizstart">
            <button className="hover:scale-105 duration-300 font-joti text-xl bg-green-800 hover:bg-green-700 text-white font-semibold py-4 px-6 text-shadow-sm rounded-3xl cursor-pointer">
              Play Again
            </button>
          </Link>
        </div>
        <div className="m-2">
        <Link to="/learn">
            <button className="hover:scale-105 duration-300 font-joti text-xl bg-green-800 hover:bg-green-700 text-white font-semibold py-4 px-6 text-shadow-sm rounded-3xl cursor-pointer">
             Restart Learning
            </button>
          </Link>
        </div>
        </div>
        
      </div>
    <div className=" grid grid-cols-[1fr_1fr_1fr] gap-4 px-6">
      <div className="relative">
        {/* Bird Image  */}
        <div className="absolute bottom-0  left-0 z-1">
         <img src={rockPigeon} alt="pigeon" className="w-full h-full" />
        </div>
      </div>
      <div>
        <p className="text-center mb-15 mt-20 text-3xl text-gray-600 font-nunito font-bold z-2">Thank you for playing!</p>
      </div>
    </div>
      
    </div>
  );
};

export default QuizResults;


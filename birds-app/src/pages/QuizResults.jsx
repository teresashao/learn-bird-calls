import { useLocation, Link } from "react-router-dom";

import rockPigeon from "/frontpigeon.png";
import crow from "/crowflying.webp";

const QuizResults = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background1.png')" }}
    >

      {/* Bird Image  */}
      <div className="absolute top-0 right-0 m-10">
        <img src={crow} alt="crow" className="w-60 h-auto" />
      </div>

      <div className="mb-20 max-w-5xl w-full h-70 flex flex-col md:flex-row items-center justify-between bg-stone-50 p-8 rounded-3xl p-15 shadow-lg border border-stone-50">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 font-joti">Quiz Complete!</h1>
          <p className="text-3xl font-nunito mb-6 text-gray-600 mt-5 font-bold">You scored <span className="text-green-800 font-bold">{score} out of 7</span> correct.</p>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0 flex flex-col items-center">
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

      <p className="text-3xl mb-6 text-gray-600 mt-2 font-nunito font-bold">Thank you for playing!</p>

      {/* Bird Image  */}
      <div className="absolute bottom-35 left-10">
        <img src={rockPigeon} alt="pigeon" className="w-80 h-auto" />
      </div>
      
    </div>
  );
};

export default QuizResults;


import { useLocation, Link } from "react-router-dom";

import rockPigeon from "/frontpigeon.png";
import crow from "/crowflying.webp";

const QuizResults = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5">

      {/* Bird Image  */}
      <div className="absolute top-0 right-0 m-10">
        <img src={crow} alt="crow" className="w-60 h-auto" />
      </div>

      <div className="mb-20 max-w-5xl w-full h-70 flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-xs p-15 inset-shadow-sm inset-shadow-gray-400">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
          <p className="text-3xl mb-6 text-gray-600 mt-5">You scored <span className="text-grass font-semibold">{score} out of 7</span> correct.</p>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0 flex flex-col items-center">
          <div className="m-2">
          <Link to="/quizstart">
            <button className="text-xl bg-grass hover:bg-lightgrass text-white font-semibold py-2 px-6 text-shadow-sm rounded-sm cursor-pointer">
              Play Again
            </button>
          </Link>
        </div>
        <div className="m-2">
        <Link to="/learn">
            <button className="text-xl bg-grass hover:bg-lightgrass text-white font-semibold py-2 px-6 text-shadow-sm rounded-sm cursor-pointer">
             Restart Learning
            </button>
          </Link>
        </div>
        </div>
        
      </div>

      <p className="text-3xl mb-6 text-gray-600 mt-5">Thank you for playing!</p>

      {/* Bird Image  */}
      <div className="absolute bottom-35 left-0">
        <img src={rockPigeon} alt="pigeon" className="w-80 h-auto" />
      </div>
      
    </div>
  );
};

export default QuizResults;


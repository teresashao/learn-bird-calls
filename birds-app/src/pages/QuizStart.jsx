

import { Link } from "react-router-dom";

const QuizStart = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
		{/* Left side*/}
		<div className="md:w-1/2 flex items-center justify-center text-center">
        <div>
          
          <div className="bg-gray-100 p-15 inset-shadow-sm inset-shadow-gray-300 rounded-xs">
            <h1 className="text-4xl font-bold mb-4 text-shadow-sm">Bird Call Quiz</h1>
            <p className="mb-6 text-lg">
              Time to test your knowledge. Can you identify all 7 calls?
            </p>
            <Link to="/quiz">
              <button className="text-2xl bg-grass hover:bg-lightgrass text-white font-semibold py-2 px-6 rounded-sm text-shadow-sm cursor-pointer">
                Start Quiz
              </button>
            </Link>
          </div>
          
		  <p className="mb-3 text-lg text-gray-500 text-shadow-xs"><br /><br /><br />Not Ready?</p>
		  <Link to="/learn">
            <button className="w-50 mb-19 text-lg bg-gray-100 hover:bg-gray-200 text-gray-500 py-2 px-6 rounded-sm border border-gray-200 cursor-pointer">
              Restart Learning
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <img
          src="/tree.png" // <-- Replace with your actual path
          alt="Bird illustration"
          className="max-w-full max-h-full object-contain p-8"
        />
		<p className="mb-18 text-gray-700 font-semibold text-xl">Click a bird to review!</p>
      </div>
      
    </div>
  );
};

export default QuizStart;

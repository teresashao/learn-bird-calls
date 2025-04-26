

import { Link } from "react-router-dom";

const QuizStart = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
		{/* Left side*/}
		<div className="md:w-1/2 flex items-center justify-center p-8 text-center">
        <div>
          
          <div className="drop-shadow-lg bg-gray-200 p-15 border border-white rounded-sm">
            <h1 className="text-4xl font-bold mb-4 text-shadow-sm">Bird Call Quiz</h1>
            <p className="mb-6 text-lg">
              Time to test your knowledge. Can you identify all 7 calls?
            </p>
            <Link to="/quiz">
              <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded text-shadow-sm">
                Start Quiz
              </button>
            </Link>
          </div>
          
		  <p className="mb-6 text-lg"><br /><br /><br />Not Ready?</p>
		  <Link to="/learn">
            <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow text-shadow-sm">
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
		<p className="text-gray-600 font-semibold text-2xl text-shadow-sm">Click a bird to review!</p>
      </div>
    </div>
  );
};

export default QuizStart;



import { Link } from "react-router-dom";

const QuizStart = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
		{/* Left side: image */}
		<div className="md:w-1/2 flex flex-col items-center justify-center">
        <img
          src="/tree.png" // <-- Replace with your actual path
          alt="Bird illustration"
          className="max-w-full max-h-full object-contain p-8"
        />
		<p className="text-gray-600 font-semibold">Click a bird to review!</p>
      </div>

      {/* Left side: text content */}
      <div className="md:w-1/2 flex items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Bird Call Quiz</h1>
          <p className="mb-6 text-lg">
            Time to test your knowledge. Can you identify all 7 calls?
          </p>
          <Link to="/quiz">
            <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
              Start Quiz
            </button>
          </Link>
		  <p className="mb-6 text-lg"><br /><br /><br />Not Ready?</p>
		  <Link to="/learn">
            <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
              Restart Learning
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;

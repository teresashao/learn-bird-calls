import { Link } from "react-router-dom";

const QuizStart = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Bird Call Quiz</h1>
      <p className="mb-6 text-lg">
	  Time to test your knowledge. Can you identify all 7 calls?
      </p>
      <Link to="/quiz">
        <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default QuizStart;

import { useLocation, Link } from "react-router-dom";

const QuizResults = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
      <p className="text-xl mb-6">
        You scored {score} out of 7 correct.
      </p>
      <Link to="/quizstart">
        <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
          Play Again
        </button>
      </Link>
    </div>
  );
};

export default QuizResults;

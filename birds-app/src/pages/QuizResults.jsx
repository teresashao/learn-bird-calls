import { useLocation, Link } from "react-router-dom";

// Example imports if you're using local images
import houseSparrow from "/sparrow.png";
import blueJay from "/blue_jay.png";
import redCardinal from "/northern_cardinal.png";
import americanCrow from "/crow.png";
import mourningDove from "/mourning_dove.webp";
import rockPigeon from "/pigeon2.png";
import americanRobin from "/robin.webp";

const birdImages = [
  rockPigeon,
  houseSparrow,
  mourningDove,
  americanRobin,
  blueJay,
  redCardinal,
  americanCrow,
];

const QuizResults = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
          <p className="text-2xl mb-6">You scored {score} out of 7 correct.</p>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0">
          <Link to="/quizstart">
            <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
              Play Again
            </button>
          </Link>
        </div>
      </div>

      <p className="mt-8 mb-4">Didn't do well?</p>
      <Link to="/learn">
        <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
          Restart Learning
        </button>
      </Link>

      <h2 className="text-3xl mt-8 mb-4"><br /><br />Thank you for playing!</h2>

      {/* Bird Image Row */}
      <div className="mt-12 w-full max-w-6xl overflow-x-auto">
        <div className="flex justify-center gap-4 flex-wrap">
          {birdImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Bird ${index + 1}`}
              className="w-24 h-24 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;


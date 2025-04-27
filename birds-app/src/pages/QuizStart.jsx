

import { Link } from "react-router-dom";
import BirdButton from "../components/BirdButton";


const QuizStart = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
		{/* Left side*/}
		<div className="md:w-1/2 flex items-center justify-center text-center">
        <div>
          
          <div className="bg-gray-100 p-15 shadow-xl border border-gray-200 rounded-xs">
            <h1 className="text-4xl font-bold mb-4 text-shadow-sm">Bird Call Quiz</h1>
            <p className="mb-6 text-lg">
              Time to test your knowledge. Can you identify all 7 calls?
            </p>
            <Link to="/quiz">
              <button className="hover:scale-105 shadow-lg text-2xl bg-grass hover:bg-lightgrass text-white font-semibold py-2 px-6 rounded-sm text-shadow-sm cursor-pointer">
                Start Quiz
              </button>
            </Link>
          </div>
          
		  <p className="mb-3 text-lg text-gray-600"><br /><br /><br />Not Ready?</p>
		  <Link to="/learn">
            <button className="hover:scale-105 shadow-sm border border-gray-200 w-50 mb-19 text-lg bg-white hover:bg-gray-100 text-gray-600 py-2 px-6 rounded-xs cursor-pointer">
              Restart Learning
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex flex-col items-center justify-center relative">
        <img
          src="/tree.png"
          alt="Bird Tree"
          className="max-w-full max-h-full object-contain p-8 opacity-85"
        />

        {/* Birds */}
        <BirdButton 
          image="/blue_jay.png" 
          audio="/audio/Jay_learn1.mp3" 
          top="18%" 
          left="48%"
        />
        <BirdButton 
          image="/crow.png" 
          audio="/audio/Crow_learn1.mp3" 
          top="10%" 
          left="70%"
        />
        <BirdButton 
          image="/northern_cardinal.png" 
          audio="/audio/Cardinal_learn1.mp3" 
          top="33%" 
          left="75%"
        />
        <BirdButton 
          image="/pigeon.png" 
          audio="/audio/Pigeon_learn1.mp3" 
          top="60%" 
          left="10%"
        />
        <BirdButton 
          image="/robin.webp" 
          audio="/audio/Robin_learn1.mp3" 
          top="30%" 
          left="30%"
        />
        <BirdButton 
          image="/sparrow_flipped.png" 
          audio="/audio/Sparrow_learn1.mp3" 
          top="63%" 
          left="65%"
        />
        <BirdButton 
          image="/mourning_dove.webp" 
          audio="/audio/Dove_learn1.wav" 
          top="25%" 
          left="15%"
        />
        
        
        <p className="mt-6 text-gray-700 font-semibold text-xl">Click a bird to review its call!</p>
      </div>
      
    </div>
  );
};

export default QuizStart;



import { Link } from "react-router-dom";
import BirdButton from "../components/BirdButton";


const QuizStart = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background2_flipped.png')" }}>
        <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side*/}
        <div className="md:w-1/2 flex items-center justify-center text-center">
            <div>
              
              <div className="mt-3 bg-stone-50 py-12 px-8 shadow-xl border border-stone-50 rounded-4xl">
                <h1 className="text-5xl font-bold mb-4 text-shadow-xs font-joti">Bird Call Quiz</h1>
                <p className="mb-6 m-6 text-xl font-semibold font-nunito text-stone-600">
                  Time to test your knowledge. Can you identify all 7 calls?
                </p>
                <Link to="/quiz">
                  <button className="font-joti hover:scale-105 shadow-lg text-2xl bg-green-800 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-3xl text-shadow-sm duration-300 cursor-pointer">
                    Start Quiz
                  </button>
                </Link>
              </div>
              
          <p className="mb-3 text-xl text-stone-600 font-nunito font-bold"><br /><br /><br />Not Ready?</p>
          <Link to="/learn">
                <button className="font-joti hover:scale-105 duration-300 shadow-md border border-stone-50 w-60 mb-19 text-lg bg-stone-50 hover:bg-stone-100 text-stone-600 py-3 px-6 rounded-3xl cursor-pointer">
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
              className="max-w-full max-h-full object-contain opacity-90"
            />

            {/* Birds */}
            <BirdButton 
              image="/blue_jay.png" 
              audio="/audio/Jay_learn1.mp3" 
              top="26%" 
              left="48%"
              name="Blue Jay"
            />
            <BirdButton 
              image="/crow.png" 
              audio="/audio/Crow_learn1.mp3" 
              top="23%" 
              left="85%"
              name="American Crow"
            />
            <BirdButton 
              image="/northern_cardinal.png" 
              audio="/audio/Cardinal_learn1.mp3" 
              top="45%" 
              left="75%"
              name="Northern Cardinal"
            />
            <BirdButton 
              image="/pigeon.png" 
              audio="/audio/Pigeon_learn1.mp3" 
              top="72%" 
              left="15%"
              name="Rock Pigeon"
            />
            <BirdButton 
              image="/robin.webp" 
              audio="/audio/Robin_learn1.mp3" 
              top="40%" 
              left="35%"
              name="American Robin"
            />
            <BirdButton 
              image="/sparrow_flipped.png" 
              audio="/audio/Sparrow_learn1.mp3" 
              top="75%" 
              left="72%"
              name="House Sparrow"
            />
            <BirdButton 
              image="/mourning_dove.webp" 
              audio="/audio/Dove_learn1.wav" 
              top="30%" 
              left="20%"
              name="Mourning Dove"
            />
            
            
            
          </div>
        <div>
          <p className="absolute top-27 right-45 font-joti text-stone-600 mt-10 text-[25px] mb-13">Click a bird to review its call!</p>
        </div>

        </div>
        </div>
  );
};

export default QuizStart;

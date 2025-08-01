import { useRef, useState } from "react";

let currentlyPlayingAudio = null; 

const BirdButton = ({ image, audio, top, left, name }) => {
  const audioRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const currentAudio = audioRef.current;

    if (!currentAudio) return;

    // If this button's audio is already playing, pause it
    if (!currentAudio.paused) {
      currentAudio.pause();
      currentlyPlayingAudio = null;
      return;
    }

    // Pause and reset any other playing audio
    if (currentlyPlayingAudio && currentlyPlayingAudio !== currentAudio) {
      currentlyPlayingAudio.pause();
      currentlyPlayingAudio.currentTime = 0;
    }

    // Play this button's audio
    currentAudio.currentTime = 0;
    currentAudio.play();
    currentlyPlayingAudio = currentAudio;
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'absolute', top, left, transform: "translate(-50%, -50%)" }}
      className="cursor-pointer flex flex-col items-center group absolute"
    >
      {/* Show bird name above image when hovered */}
      {hovered && (
        <div className="font-joti text-center mb-1 px-2 py-1 rounded-3xl bg-green-800 text-white text-sm font-bold shadow-md">
          {name}
        </div>
      )}

      {/* Bird Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-auto h-30 object-cover transform transition hover:scale-110 duration-400" 
      />
      
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default BirdButton;

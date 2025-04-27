import { useRef } from "react";

let currentlyPlayingAudio = null; 

const BirdButton = ({ image, audio, top, left}) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    // If another audio is playing, pause it
    if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
      currentlyPlayingAudio.pause();
      currentlyPlayingAudio.currentTime = 0;
    }

    // Play the clicked audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      currentlyPlayingAudio = audioRef.current; // Update the currently playing
    }
  };

  return (
    <div 
      onClick={handleClick}
      style={{ position: 'absolute', top, left }}
      className="cursor-pointer"
    >
      <img 
        src={image} 
        alt="Bird" 
        className="w-auto h-30 object-cover shadow-lg transform transition" 
      />
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default BirdButton;

import { useState, useRef } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";
import Gallery from "./Gallery";

const BirdCard = ({
	image1, image2, image3,
	description,
	tip = "sample tip",
	funFact,
	closeCard,
	name,
	audio,
	audio2
}) => {
	const [activeTab, setActiveTab] = useState("tip");
	const [isPlaying1, setIsPlaying1] = useState(false);
	const [isPlaying2, setIsPlaying2] = useState(false);

	const audioRef1 = useRef(null);
	const audioRef2 = useRef(null);

	const toggleAudio1 = () => {
		if (audioRef1.current) {
			if (isPlaying1) {
				audioRef1.current.pause();
			} else {
				audioRef1.current.play();
			}
			setIsPlaying1(!isPlaying1);
		}
	};

	const toggleAudio2 = () => {
		if (audioRef2.current) {
			if (isPlaying2) {
				audioRef2.current.pause();
			} else {
				audioRef2.current.play();
			}
			setIsPlaying2(!isPlaying2);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
			{/* Scrollable content container */}
			<div className="relative w-[90%] max-w-4xl sm:h-[70%] lg:h-[60%] h-[90%] max-h-screen overflow-y-auto bg-white rounded-3xl p-8 shadow-lg text-black flex flex-col border-[12px] border-[#1a3d2f]">
				{/* X button */}
				<button
					onClick={closeCard}
					className="absolute top-6 right-6 text-gray-700 hover:text-gray-400 text-5xl font-bold"
				>
					&times;
				</button>

				{/* Title and Play Buttons */}
				<div className="font-joti flex flex-wrap items-center gap-4 mb-6 justify-center md:justify-start text-center mt-12 md:mt-0">
					<h1 className="text-5xl font-extrabold text-[#1a3d2f]">{name.toUpperCase()}</h1>

					{/* First Audio Button */}
					<button
						onClick={toggleAudio1}
						className="shine-button transition-all duration-200 transform hover:scale-105 active:scale-95 
								   bg-gradient-to-br from-[#b9d6e8] to-[#6fa5c5] text-white 
								   shadow-md rounded-full p-2 border-2 border-white"
					>
						{isPlaying1 ? (
							<PauseCircle size={32} className="text-[#1a3d2f]" />
						) : (
							<PlayCircle size={32} className="text-[#1a3d2f]" />
						)}
					</button>
					<audio ref={audioRef1} src={audio} onEnded={() => setIsPlaying1(false)} />

					{/* Second Audio Button */}
					{audio2 && (
						<>
							<button
								onClick={toggleAudio2}
								className="shine-button transition-all duration-200 transform hover:scale-105 active:scale-95 
										   bg-gradient-to-br from-[#b9d6e8] to-[#6fa5c5] text-white 
										   shadow-md rounded-full p-2 border-2 border-white"
							>
								{isPlaying2 ? (
									<PauseCircle size={32} className="text-[#1a3d2f]" />
								) : (
									<PlayCircle size={32} className="text-[#1a3d2f]" />
								)}
							</button>
							<audio ref={audioRef2} src={audio2} onEnded={() => setIsPlaying2(false)} />
						</>
					)}
				</div>

				{/* Description + Tabs + Gallery */}
				<div className="flex flex-col md:flex-row gap-8 items-start mb-8">
					{/* Description and tabs */}
					<div className="flex-1">
						<p className="text-xl mb-8">{description}</p>

						{/* Tabs */}
						<div className="flex gap-2 justify-start rounded-lg">
							<button
								onClick={() => setActiveTab("tip")}
								className={`font-joti text-xl px-6 pb-3 py-3 text-center font-bold rounded-t-lg ${activeTab === "tip" ? "bg-sky-blue" : "bg-gray-100"}`}
							>
								TIP
							</button>
							<button
								onClick={() => setActiveTab("funFact")}
								className={`font-joti text-xl px-6 pb-3 py-3 text-center font-bold rounded-t-lg ${activeTab === "funFact" ? "bg-sky-blue" : "bg-gray-100"}`}
							>
								FUN FACT
							</button>
						</div>

						{/* Tab Content */}
						<div className="p-4 bg-sky-blue rounded-b-lg rounded-tr-lg text-gray-700 text-lg">
							{activeTab === "tip" ? <p>{tip}</p> : <p>{funFact}</p>}
						</div>
					</div>

					{/* Gallery Section */}
					<Gallery
						image1={image1}
						image2={image2}
						image3={image3}
						name={name}
					/>
				</div>
			</div>
		</div>
	);
};

export default BirdCard;

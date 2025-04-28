import { useState, useRef } from "react";

const BirdCard = ({ image1, image2, description, tip = "sample tip", funFact, closeCard, name, audio }) => {
	const [activeTab, setActiveTab] = useState("tip"); // "tip" or "funFact"
	const audioRef = useRef(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
			<div className="relative w-[80%] max-w-4xl bg-white rounded-3xl p-8 shadow-lg text-black flex flex-col border-[12px] border-[#1a3d2f]">
				{/* X button */}
				<button
					onClick={closeCard}
					className="absolute top-6 right-6 text-gray-700 hover:text-gray-400 text-5xl font-bold"
				>
					&times;
				</button>

				{/* Title and Play Button */}
				<div className="font-joti flex items-center gap-4 mb-6">
					<h1 className="text-5xl font-extrabold text-[#1a3d2f]">{name.toUpperCase()}</h1>
					<button onClick={playAudio}>
						<span className="text-3xl">🔊</span>
					</button>
					<audio ref={audioRef} src={audio} />
				</div>

				{/* Main Content */}
				<div className="flex gap-8 items-start mb-8">
					{/* Images */}
					<div className="relative w-100 h-80">
						<img
							src={image2}
							alt={`${name} standing`}
							className="absolute top-0 left-0 w-60 h-60 object-contain"
						/>
						<img
							src={image1}
							alt={`${name} flying`}
							className="absolute top-32 left-40 w-50 h-50 object-contain"
						/>
					</div>


					{/* Description */}
					<div className="flex-1">
						<p className="text-2xl mb-4">{description}</p>
					</div>
				</div>

				{/* Tabs */}
				<div className="flex gap-2 justify-start rounded-lg">
					<button
						onClick={() => setActiveTab("tip")}
						className={`font-joti text-xl px-6 pb-3 py-3 text-center font-bold rounded-t-lg ${activeTab === "tip" ? "bg-sky-blue" : "bg-gray-100"
							}`}
					>
						TIP
					</button>
					<button
						onClick={() => setActiveTab("funFact")}
						className={`font-joti text-xl px-6 pb-3 py-3 text-center font-bold rounded-t-lg ${activeTab === "funFact" ? "bg-sky-blue" : "bg-gray-100"
							}`}
					>
						FUN FACT
					</button>
				</div>


				{/* Tab Content */}
				<div className="p-4 bg-sky-blue rounded-b-lg rounded-tr-lg text-gray-700 text-lg">
					{activeTab === "tip" ? (
						<p><span className="font-bold">Tip:</span> {tip}</p>
					) : (
						<p><span className="font-bold">Fun Fact:</span> {funFact}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default BirdCard;

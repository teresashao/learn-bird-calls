import { useState } from "react";
import BirdCard from "./BirdCard";

const Bird = ({ id, name, image, image1, image2, image3, description = "sample description", funFact = "sample fun fact", tip = "sample tip", style, completed, refreshCompleted, audio1, audio2 }) => {
	const [showCard, setShowCard] = useState(false);

	const handleClick = async () => {
		setShowCard(true);

		try {
			await fetch("http://localhost:5001/complete_bird", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ bird_id: id }),
			});
			refreshCompleted();  // <-- Fetch new completed status immediately
		} catch (error) {
			console.error("Failed to send complete bird request:", error);
		}
	};

	return (
		<div>
			<img
				src={image}
				alt={name}
				className={`${style} ${completed ? "opacity-68" : "animate-pulse-white"}`}
				onClick={handleClick}
			/>

			{showCard && (
				<div>
					<BirdCard
						name={name}
						image1={image1}
						image2={image2}
						image3={image3}
						description={description}
						funFact={funFact}
						tip={tip}
						audio={audio1}
						audio2={audio2}
						closeCard={() => setShowCard(false)}
					/>
				</div>
			)}
		</div>
	);
};

export default Bird;

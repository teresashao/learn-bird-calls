import { useState } from "react"
import BirdCard from "./BirdCard"

const Bird = ({ name, image, image2, description = "sample description", funFact = "sample fun fact", style }) => {
	const [showCard, setShowCard] = useState(false)


	return (
		<div>
			<img
				src={image}
				alt={name}
				className={`${style} animate-pulse-white`}
				onClick={() => setShowCard(true)}
			/>

			{showCard && (
				<div className="">
					<BirdCard
						name={name}
						image1={image}
						image2={image2}
						description={description}
						funFact={funFact}
						closeCard={() => setShowCard(false)} />
				</div>
			)}
		</div>

	)
}

export default Bird

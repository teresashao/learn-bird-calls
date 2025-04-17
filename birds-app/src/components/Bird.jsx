import { useState } from "react"
import BirdCard from "./BirdCard"

const Bird = ({ name, image, description = "sample description", funFact = "sample fun fact", style }) => {
	const [showCard, setShowCard] = useState(false)


	return (
		<div>
			<img
				src={image}
				alt={name}
				className={style}
				onClick={() => setShowCard(true)}
			/>

			{showCard && (
				<div className="">
					<BirdCard
						name={name}
						image={image}
						description={description}
						funFact={funFact}
						closeCard={() => setShowCard(false)} />
				</div>
			)}
		</div>

	)
}

export default Bird

const BirdCard = ({ image, description, funFact, closeCard, name }) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
			<div className="relative w-[60%] h-[60%] bg-[#1a3d2f] rounded-lg p-6 shadow-lg text-white flex flex-col">
				{/* X button */}
				<button
					onClick={closeCard}
					className="absolute top-6 right-6 text-white hover:text-gray-300 text-6xl font-bold"
				>
					&times;
				</button>

				{/* Title */}
				<h1 className="text-6xl font-extrabold m-6">{name}</h1>

				{/* Main content */}
				<div className="flex gap-6 items-start overflow-y-auto">
					{/* Bird image */}
					<img
						src={image}
						alt={name}
						className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
					/>

					{/* Text */}
					<div className="flex flex-col gap-4">
						<p className="text-xl font-medium">{description}</p>
						<p className="text-md italic text-lime-300">Fun fact: {funFact}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BirdCard

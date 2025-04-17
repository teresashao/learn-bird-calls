import Bird from "../components/Bird"

const Learn = () => (
	<div className="relative flex flex-col items-center min-h-screen pt-12">
		<p className="text-stone-600">Click on a bird to learn more!</p>

		{/* Tree background */}
		<img
			src="/tree.png"
			alt="Main tree"
			className="absolute top-20 h-[75%] opacity-80 saturate-50"
		/>

		{/* Bird in front, smaller and positioned */}
		<Bird
			name="Blue Jay"
			image="/blue_jay.png"
			style="absolute top-20 right-2/5 h-[20%] w-auto"
		/>

		<Bird
			name="American Crow"
			image="/crow.png"
			style="absolute top-10 right-1/5 h-[20%] w-auto"
		/>

		<Bird
			name="Northern Cardinal"
			image="/northern_cardinal.png"
			style="absolute top-64 right-1/5 h-[20%] w-auto"
		/>
		<Bird
			name="Rock Pigeon"
			image="/pigeon.png"
			style="absolute bottom-30 left-1/5 h-[15%] w-auto"
		/>
		<Bird
			name="American Robin"
			image="/robin.webp"
			style="absolute top-60 left-2/5 h-[20%] w-auto"
		/>
		<Bird
			name="House Sparrow"
			image="/sparrow.png"
			style="absolute top-80 left-1/5 h-[20%] w-auto"
		/>

		<Bird
			name="Mourning Dove"
			image="/mourning_dove.webp"
			style="absolute top-1/5 left-1/4 h-[20%] w-auto"
		/>
	</div>
)

export default Learn

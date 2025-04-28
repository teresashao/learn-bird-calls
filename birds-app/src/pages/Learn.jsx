import Bird from "../components/Bird"

const Learn = () => (
	<div className="relative flex flex-col items-center min-h-screen pt-12"
	>
		<div
			className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] -z-10"
			style={{ backgroundImage: "url('/background2.png')" }}
		/>
		<p className="absolute left-24 font-joti text-stone-600 pt-20 text-[40px]">Click on a bird</p>
		<p className="absolute left-24 font-joti text-stone-600 pt-32 text-[40px]">to learn more!</p>

		{/* Tree background */}
		<img
			src="/tree.png"
			alt="Main tree"
			className="absolute bottom-0 h-[75%] opacity-90 saturate-70"
		/>

		{/* Bird in front, smaller and positioned */}
		<Bird
			name="Blue Jay"
			image2="blue_jay_fly.png"
			image="/blue_jay.png"
			style="absolute top-40 right-2/5 h-[20%] w-auto"
			description="Starting out easy, if you live in NYC, you’ve probably heard one of these guys before.
			Rock pigeon calls are low coos. Prolonged cooing is usually used to attract a mate while shorter grunts are alarm calls."
		/>

		<Bird
			name="American Crow"
			image="/crow.png"
			style="absolute top-60 right-1/8 h-[20%] w-auto"
		/>

		<Bird
			name="Northern Cardinal"
			image="/northern_cardinal.png"
			style="absolute top-124 left-4/6 h-[15%] w-auto scale-x-[-1]"
		/>
		<Bird
			name="Rock Pigeon"
			image="/pigeon.png"
			style="absolute bottom-8 left-1/5 h-[15%] w-auto"
		/>
		<Bird
			name="American Robin"
			image="/robin.webp"
			style="absolute top-100 left-2/5 h-[20%] w-auto"
		/>
		<Bird
			name="House Sparrow"
			image="/sparrow.png"
			style="absolute top-100 left-90 h-[20%] w-auto"
		/>

		<Bird
			name="Mourning Dove"
			image="/mourning_dove.webp"
			style="absolute top-60 left-2/7 h-[20%] w-auto"
		/>
	</div>
)

export default Learn

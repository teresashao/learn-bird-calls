import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-[25px]">
			<img
				src="/flying-birds.gif"
				alt="Flying bird"
				className="absolute top-16 right-10 w-50 h-auto"
			/>
			<h1 className="text-[80px] text-center mx-auto font-extrabold">Who's that Chirp?</h1>
			<p className="w-[60%] mx-auto text-center text-lg pb-12">
				This site will help you learn to identify common birds in NYC by their call.
				Next time you take a walk through Central Park, you’ll know who’s singing to you!
			</p>

			<Link
				to="/learn"
				className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow"
			>
				Start Learning
			</Link>

		</div>
	)
}

export default Home
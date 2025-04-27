import { Link } from 'react-router-dom'

function Home() {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-[25px] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/background1.png')" }}
		>
			<img
				src="/flying-birds.gif"
				alt="Flying bird"
				className="absolute top-16 right-10 w-50 h-auto"
			/>
			<div>
				<h1 className="font-joti text-[120px] text-center mx-auto leading-[1]">WHO'S THAT</h1>
				<h1 className="font-joti text-[120px] text-center mx-auto leading-[1]">CHIRP?</h1>

			</div>
			<p className="font-joti  w-[60%] text-[46px] mx-auto text-center text-lg pb-12 mt-14">
				Learn NYC Bird Calls
			</p>

			<Link
				to="/learn"
				className="font-joti bg-green-800 hover:bg-green-700 text-white py-2 px-20 rounded-3xl shadow-lg text-[28px] transform hover:scale-105 transition duration-300"
			>
				START
			</Link>

		</div>
	)
}

export default Home
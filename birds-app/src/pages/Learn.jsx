import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import this to navigate
import Bird from "../components/Bird";

const Learn = () => {
	const [completed, setCompleted] = useState(Array(7).fill(0));
	const navigate = useNavigate(); // <-- initialize

	const fetchCompleted = async () => {
		try {
			const response = await fetch("http://localhost:5001/get_completed");
			const data = await response.json();
			setCompleted(data.completed);
			console.log(data);
		} catch (error) {
			console.error("Error fetching completed data:", error);
		}
	};

	useEffect(() => {
		fetchCompleted();
	}, []);

	const progressPercent = (completed.filter(c => c === 1).length / completed.length) * 100;
	const allCompleted = completed.every(c => c === 1);

	const handleRestart = async () => {
		try {
			await fetch('http://localhost:5001/start', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			await fetchCompleted(); // refresh immediately after restarting
		} catch (error) {
			console.error("Error restarting:", error);
		}
	};

	return (
		<div className="relative flex flex-col items-center min-h-screen pt-12">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] -z-10"
				style={{ backgroundImage: "url('/background2.png')" }}
			/>

			{/* Progress Bar + Info Container */}
			<div className="absolute top-10 flex flex-col items-center w-full">
				<p className="font-joti text-stone-600 text-2xl pb-6">Click on a bird to learn more!</p>

				{/* Progress Bar and 0/7 */}
				<div className="flex items-center justify-center flex-wrap gap-2">
					{/* Hollow Progress Bar */}
					<div className="w-[300px] sm:w-[400px] md:w-[500px] h-4 border-4 border-green-900 rounded-full overflow-hidden relative">
						<div
							className="h-full bg-green-600 transition-all duration-500"
							style={{ width: `${progressPercent}%` }}
						/>
					</div>

					{/* Progress Text */}
					<div className="font-joti text-green-900 text-xl">
						{completed.filter(c => c === 1).length} / {completed.length}
					</div>
				</div>



			</div>

			{allCompleted && (
				<div className="absolute bottom-20 right-16 flex flex-col space-y-2 z-50">
					<button
						onClick={() => navigate("/quizstart")}
						className="font-joti bg-green-800 hover:bg-green-700 hover:scale-105 duration-300 text-white py-2 px-6 rounded-3xl shadow-md text-lg transition duration-300"
					>
						Next
					</button>
					<button
						onClick={handleRestart}
						className="font-joti border-4 border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white hover:scale-105 duration-300 py-1 px-6 rounded-3xl shadow-md text-lg transition duration-300"
					>
						Restart Learning
					</button>

				</div>
			)}

			{/* Tree container with birds */}
			<div className="relative max-w-[70%] mx-auto mt-20">
				{/* Tree image */}
				<img
					src="/tree.png"
					alt="Main tree"
					className="w-full h-full object-contain opacity-90 saturate-70"
				/>

				{/* Birds (positions adjustable via top/left %) */}
				<Bird
					id={0}
					name="Blue Jay"
					image="/blue_jay.png"
					image1="/gallery/jay/jay1.png"
					image2="/gallery/jay/jay2.jpg"
					image3="/gallery/jay/jay3.jpg"
					style="absolute"
					customStyle={{ top: '2%', left: '60%' }}
					description="These small blue birds are best known for their loud, harsh jeers. This sound is often an alarm call to alert others of a predator or to assemble the flock."
					funFact="Blue Jays often imitate the sound of Hawks to confuse predators!"
					tip="Some claim their call sounds like “Jay Jay Jay” or “Jeer Jeer Jeer”"
					completed={completed[0]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Jay_learn1.mp3"
					audio2="/audio/Jay_learn2.mp3"
				/>

				<Bird
					id={1}
					name="American Crow"
					image="/crow.png"
					image1="/gallery/crow/crow1.webp"
					image2="/gallery/crow/crow2.png"
					image3="/gallery/crow/crow3.jpg"
					style="absolute"
					customStyle={{ top: '5%', left: '90%' }}
					description="These jet black birds make a harsh, guttural “caw”. You’ve likely heard these noises in movies during a “creepy” scene.
					Crows are relatives of the Blue Jay which is why you may find they sound surprisingly similar."
					funFact="Don’t make them mad. They have great long term memory, known to hold grudges against humans for up to 17 years!"
					tip="Crows are well known for their “Caw” and “Ka-caw” calls"
					completed={completed[1]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Crow_learn1.mp3"
					audio2="/audio/Crow_learn2.mp3"
				/>

				<Bird
					id={2}
					name="Northern Cardinal"
					image="/northern_cardinal.png"
					image1="/gallery/cardinal/cardinal1.jpg"
					image2="/gallery/cardinal/cardinal2.jpeg"
					image3="/gallery/cardinal/cardinal3.png"
					style="absolute"
					customStyle={{ top: '50%', left: '70%' }}
					description="These bright red birds have a song involving whistle-like syllables. The song starts in a higher pitch before dropping.
					This sound is used to warn off predators and attract a life-long mate!"
					funFact="In many spiritual traditions, seeing a red cardinal means a deceased loved one is watching over you."
					tip="Some claim their call sounds like “Cheer Cheer Cheer Birdie Birdie Birdie”"
					completed={completed[2]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Cardinal_learn1.mp3"
					audio2="/audio/Cardinal_learn2.mp3"
				/>

				<Bird
					id={3}
					name="Rock Pigeon"
					image="/pigeon.png"
					image1="/gallery/pigeon/pigeon1.webp"
					image2="/gallery/pigeon/pigeon2.jpg"
					image3="/gallery/pigeon/pigeon3.jpeg"
					style="absolute"
					customStyle={{ top: '75%', left: '10%' }}
					description="If you live in NYC, you’ve probably heard one of these guys before.
					Rock pigeon calls are low coos. Prolonged cooing is usually used to attract a mate while shorter grunts are alarm calls."
					funFact="It is estimated that pigeons have lived among humans for at least 5,000 years!"
					tip="Pigeons make a throaty cooing noise."
					completed={completed[3]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Pigeon_learn1.mp3"
					audio2="/audio/Pigeon_learn2.mp3"
				/>

				<Bird
					id={4}
					name="American Robin"
					image="/robin.webp"
					image1="/gallery/robin/robin1.jpg"
					image2="/gallery/robin/robin1.webp"
					image3="/gallery/robin/robin2.webp"
					style="absolute"
					customStyle={{ top: '30%', left: '40%' }}
					description="The robin is known for its cheerful, carol-like whistles. Their song is melodic and is a familiar sound during spring time.
					Their song is used to attract females, maintain terrority, and want rivals."
					funFact="American Robin lay eggs with a unique bright blue color!"
					tip="A phrase to remember: “Cheerio. Cheery-me. Cheerio. Cheery-me”"
					completed={completed[4]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Robin_learn1.mp3"
					audio2="/audio/Robin_learn2.wav"
				/>

				<Bird
					id={5}
					name="House Sparrow"
					image="/sparrow.png"
					image1="/gallery/sparrow/sparrow1.jpg"
					image2="/gallery/sparrow/sparrow2.webp"
					image3="/gallery/sparrow/sparrow3.jpg"
					style="absolute"
					customStyle={{ top: '55%', left: '15%' }}
					description="These small birds have a dry chipping call that could be described as just a simple chirp. 
					These little guys can often be found in low trees and bushes in the city. You’ll sometimes see them walking around."
					funFact="House Sparrows are strongly associated with humans. They prefer human-modified environments like the city."
					tip="Sparrows make chipping “chadics.” Their sounds don’t have melody."
					completed={completed[5]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Sparrow_learn1.mp3"
					audio2="/audio/Sparrow_learn2.mp3"
				/>

				<Bird
					id={6}
					name="Mourning Dove"
					image="/mourning_dove.webp"
					image1="/gallery/dove/dove1.jpg"
					image2="/gallery/dove/dove2.jpg"
					image3="/gallery/dove/dove3.jpg"
					style="absolute"
					customStyle={{ top: '20%', left: '15%' }}
					description="These doves have a long, sad sounding song that involves a series of coos. 
					Mourning Doves are common across the US making their song familiar and even comforting to many people."
					funFact="Their call is often associated with childhood and nostalgia for a simpler time."
					tip="Their song is a “coo-OO-oo-oo” with a higher coo in the middle"
					completed={completed[6]}
					refreshCompleted={fetchCompleted}
					audio1="/audio/Dove_learn1.wav"
					audio2="/audio/Dove_learn2.mp3"
				/>
			</div>


		</div>
	);
};

export default Learn;

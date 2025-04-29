import { useState } from "react";

const Gallery = ({ image1, image2, image3, name }) => {
	const images = [image1, image2, image3];
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div className="relative w-[300px] h-[300px] flex items-center justify-center rounded-2xl ">
			{/* Left Arrow */}
			<button
				onClick={goToPrevious}
				className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-700 transition"
			>
				&lt;
			</button>

			{/* Image Frame */}
			<div className="w-[250px] h-[250px] flex items-center justify-center">
				<img
					src={images[currentIndex]}
					alt={`${name} pose ${currentIndex + 1}`}
					className="w-full h-full object-cover rounded-2xl"
				/>
			</div>

			{/* Right Arrow */}
			<button
				onClick={goToNext}
				className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-700 transition"
			>
				&gt;
			</button>
		</div>
	);
};

export default Gallery;

import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="bg-sky-blue sticky top-0 z-50">
			<div className="flex justify-between items-center p-4">
				{/* Left side */}
				<Link to="/home" className="font-semibold hover:underline">HOME</Link>

				{/* Right side */}
				<div className="flex gap-8 pr-8 font-semibold">
					<Link to="/learn" className="hover:underline">LEARN</Link>
					<Link to="/quizstart" className="hover:underline">QUIZ</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar

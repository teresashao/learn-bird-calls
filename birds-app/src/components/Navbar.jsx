import { Link } from 'react-router-dom'

const Navbar = () => {

	return (
		<div>
			<div className="flex gap-4 p-4 border-b items-center">
				<Link to="/">Home</Link>
				<Link to="/learn">Learn</Link>
				<Link to="/quizstart">Quiz</Link>
			</div>
		</div>

	)
}

export default Navbar

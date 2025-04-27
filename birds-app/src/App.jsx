import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import QuizStart from "./pages/QuizStart";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";


function App() {

  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </div>
  )
}

export default App

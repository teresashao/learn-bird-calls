import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import QuizStart from "./pages/QuizStart";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Landing from './pages/Landing';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </div>
  )
}

export default App;

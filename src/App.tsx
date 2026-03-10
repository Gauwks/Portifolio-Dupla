import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Competencias from './components/competencias/Competencias'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/competencias" element={<Competencias />} />
      </Routes>
    </Router>
  )
}

export default App

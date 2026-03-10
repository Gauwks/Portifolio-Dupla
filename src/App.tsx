import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Competencias from './Competencias'

function Home() {
  return (
    <main className="main-home">
      <div className="div-nomes">
        <h1> Olá! Somos seus amiguinhos, <span> Maria Clara</span> e <span> Rafael D'Angelo</span></h1>
      </div>
      <nav className="nav-links">
        <Link to="/competencias" className="nav-link">Competências</Link>
      </nav>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competencias" element={<Competencias />} />
      </Routes>
    </Router>
  )
}

export default App

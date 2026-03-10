import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import './Competencias.css';

function Competencias() {
  return (
    <main className="container-Comp">
      <h1>Competências</h1>
      <section className="pessoa-section">
        <h2 className="pessoa-nome maria-nome">Maria Clara</h2>
        
        <div className="habilidades maria-habilidades">
          <div className="CardHTML maria-card">
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div className="CardCSS maria-card">
            <FaCss3Alt />
            <p>CSS</p>
          </div>
          <div className="CardJS maria-card">
            <FaJsSquare />
            <p>JavaScript</p>
          </div>
          <div className="CardSQL maria-card">
            <FaPhp />
            <p>PHP</p>
          </div>
          <div className="CardReact maria-card">
            <FaReact />
            <p>React</p>
          </div>
          <div className="CardSQL maria-card">
            <GrMysql />
            <p>MySQL</p>
          </div>
        </div>

      </section>

   
      <section className="pessoa-section">
        <h2 className="pessoa-nome rafael-nome">Rafael D'Angelo</h2>
        
        <div className="habilidades rafael-habilidades">
          <div className="CardHTML rafael-card">
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div className="CardCSS rafael-card">
            <FaCss3Alt />
            <p>CSS</p>
          </div>
          <div className="CardJS rafael-card">
            <FaJsSquare />
            <p>JavaScript</p>
          </div>
          <div className="CardReact rafael-card">
            <FaReact />
            <p>React</p>
          </div>
          <div className="CardSQL rafael-card">
            <FaPhp />
            <p>PHP</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Competencias;

import './Sobre.css';

function Sobre() {
  return (
    <main className="container-sobre">
      <h1 className="titulo-sobre">Sobre Nós</h1>
      
      <section className="sobre-intro">
        <p className="intro-text">
          Somos estudantes do último ano do ensino médio integrado em Desenvolvimento de Sistemas 
          na ETEC de Peruíbe. Apaixonados por tecnologia e inovação, estamos em constante aprendizado 
          e desenvolvimento de nossas habilidades em programação e desenvolvimento web.
        </p>
      </section>

      <section className="pessoas-sobre">
        {/* Maria Clara */}
        <div className="pessoa-card maria-card-sobre">
          <h2 className="pessoa-titulo maria-titulo">Maria Clara</h2>
          <div className="pessoa-info">
            <p className="info-label">Formação:</p>
            <p className="info-text">Ensino Médio Integrado em Desenvolvimento de Sistemas - ETEC Peruíbe</p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Especialidades:</p>
            <p className="info-text">Desenvolvimento Frontend, Design Responsivo, JavaScript e React</p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Objetivo:</p>
            <p className="info-text">
              Busco me aprofundar em desenvolvimento web full-stack, criando aplicações inovadoras 
              e impactantes. Apaixonada por transformar ideias em código funcional e intuitivo.
            </p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Interesses:</p>
            <p className="info-text">Web Design, UX/UI, Desenvolvimento Frontend, Tecnologias Modernas</p>
          </div>
        </div>

        {/* Rafael D'Angelo */}
        <div className="pessoa-card rafael-card-sobre">
          <h2 className="pessoa-titulo rafael-titulo">Rafael D'Angelo</h2>
          <div className="pessoa-info">
            <p className="info-label">Formação:</p>
            <p className="info-text">Ensino Médio Integrado em Desenvolvimento de Sistemas - ETEC Peruíbe</p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Especialidades:</p>
            <p className="info-text">Desenvolvimento Backend, Banco de Dados, JavaScript e Node.js</p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Objetivo:</p>
            <p className="info-text">
              Aprofundar conhecimentos em desenvolvimento backend e arquitetura de sistemas. 
              Dedicado a criar soluções robustas e escaláveis para problemas reais.
            </p>
          </div>
          <div className="pessoa-info">
            <p className="info-label">Interesses:</p>
            <p className="info-text">Backend Development, APIs, Banco de Dados, Arquitetura de Software</p>
          </div>
        </div>
      </section>

      <section className="escola-info">
        <h2 className="titulo-escola">ETEC de Peruíbe</h2>
        <p className="texto-escola">
          A Escola Técnica Estadual de Peruíbe é uma instituição de ensino técnico que oferece 
          formação profissional integrada ao ensino médio. O curso de Desenvolvimento de Sistemas 
          prepara profissionais capacitados para atuar no mercado de tecnologia, com conhecimentos 
          em programação, banco de dados, desenvolvimento web e mobile, entre outras áreas.
        </p>
      </section>
    </main>
  );
}

export default Sobre;

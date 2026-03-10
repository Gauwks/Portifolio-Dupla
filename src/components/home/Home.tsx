import './Home.css';

function Home() {
  return (
    <main className="main-home">
      <div className="container-home">
        <div className="div-nomes">
          <h1 className="titulo-home">
            Olá! Somos seus amiguinhos, <span className="nome-destaque"> Maria Clara</span> e <span className="nome-destaque"> Rafael D'Angelo</span>
          </h1>
          <p className="subtitulo-home">
            Estudantes do último ano do ensino médio integrado em Desenvolvimento de Sistemas na ETEC de Peruíbe
          </p>
        </div>

        <section className="apresentacao">
          <div className="card-apresentacao maria-apresentacao">
            <h2 className="nome-card maria-nome-card">Maria Clara</h2>
            <p className="descricao-card">
              Desenvolvedora em formação apaixonada por frontend e design responsivo. 
              Especializada em React, JavaScript e criação de interfaces intuitivas e modernas.
            </p>
            <div className="tags">
              <span className="tag maria-tag">React</span>
              <span className="tag maria-tag">Frontend</span>
              <span className="tag maria-tag">JavaScript</span>
            </div>
          </div>

          <div className="card-apresentacao rafael-apresentacao">
            <h2 className="nome-card rafael-nome-card">Rafael D'Angelo</h2>
            <p className="descricao-card">
              Desenvolvedor em formação focado em backend e arquitetura de sistemas. 
              Especializado em Node.js, banco de dados e criação de APIs robustas.
            </p>
            <div className="tags">
              <span className="tag rafael-tag">Node.js</span>
              <span className="tag rafael-tag">Backend</span>
              <span className="tag rafael-tag">Banco de Dados</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <p className="cta-text">
            Explore nosso portfólio, conheça nossas competências e projetos!
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;

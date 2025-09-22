import Banner from './components/Banner/index.js';
import CampoTexto from './components/CampoTexto/index.js';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
    </div>
  );
}

export default App;
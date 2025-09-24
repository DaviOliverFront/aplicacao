import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaTimes from "../ListaTimes/index.js";

const Formulario = () => {

  const times = ["", "Presidência", "Diáconos", "Secretários", "Tesoureiros"];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Membro!</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
        <ListaTimes label="Time" itens={times} />
      </form>
    </section>
  );
};

export default Formulario;

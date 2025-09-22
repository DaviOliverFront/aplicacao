import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Membro!</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
      </form>
    </section>
  );
};

export default Formulario;

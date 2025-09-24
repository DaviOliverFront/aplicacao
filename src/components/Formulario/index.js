import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaSuspensa from "../ListaSuspensa/index.js";
import Botao from "../Botao/index.js";


const Formulario = () => {

  const times = ["", "Presidência", "Diáconos", "Secretários", "Tesoureiros"];

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Membro!</h2>
         <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
         <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
         <CampoTexto label="Imagem" placeholder="Informe a URL da imagem" />
         <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
         <Botao text="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;

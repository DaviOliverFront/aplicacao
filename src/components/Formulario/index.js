import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return(
        <section className='Formulario'>
            <form>
                <h2>Preencha os dados para criar um novo membro!</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
            </form>
        </section>
    )
}

export default Formulario;
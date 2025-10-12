import Membro from '../Membro'
import './Time.css'

const Time = (props) => {
    return (
        props.membro.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='membros'>
                {/* ALTERAÇÃO AQUI: Usando membro.id como a key */}
                {props.membro.map(membro => 
                    <Membro 
                        key={membro.id} // <--- CORREÇÃO! Usar o ID único
                        nome={membro.nome} 
                        cargo={membro.cargo} 
                        imagem={membro.imagem} 
                    />
                )}
            </div>
        </section>
    );
}

export default Time;
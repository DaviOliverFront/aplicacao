import Membro from '../Membro';
import './Time.css'

const Time = (props) => {
  return (
    <section className='time' style={{ backgroundColor: props.corSecundaria}}>
        <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
        <Membro/>
        <Membro/>
    </section>
  );
}

export default Time;
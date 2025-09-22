import './CampoTexto.css'

const CampoTexto = (props) => {
    return(
        <main>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} value={props.valor} />
        </main>
    )
}

export default CampoTexto;
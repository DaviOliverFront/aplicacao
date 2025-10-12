import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
             <select required={props.obrigatorio} valor={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                <option value="">Selecione um time</option>
            </select>
        </div>
    );
}

export default ListaSuspensa;
import Banner from './components/Banner/index.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';
import { useState } from 'react';

function App() {

  const times = [
    { nome: 'Presidência', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'Diáconos', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Secretários', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { nome: 'Tesoureiros', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
  ]

  const [membros, setMembros] = useState([]);

  const aoNovoMembroCadastrado = (membro) => {
    setMembros([...membros, membro]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario time={times.map(time => time.nome)} aoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}/>
      {times.map(time => <Time 
      key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      membro={membros.filter(membro => membro.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
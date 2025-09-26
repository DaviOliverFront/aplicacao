import Banner from './components/Banner/index.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';
import { useState } from 'react';

function App() {

  const times = []

  const [membros, setMembros] = useState([]);

  const aoNovoMembroCadastrado = (membro) => {
    console.log(membro);
    setMembros([...membros, membro]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}/>
      <Time nome="Presidência"/>
      <Time nome="Diáconos"/>
      <Time nome="Secretários"/>
      <Time nome="Tesoureiros"/>
    </div>
  );
}

export default App;
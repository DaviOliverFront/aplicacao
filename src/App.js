import Banner from './components/Banner/index.js';
import Formulario from './components/Formulario/index.js';
import { useState } from 'react';

function App() {

  const [membros, setMembros] = useState([]);

  const aoNovoMembroCadastrado = (membro) => {
    console.log(membro);
    setMembros([...membros, membro]);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}/>
    </div>
  );
}

export default App;
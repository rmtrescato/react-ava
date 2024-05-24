import './App.css';
import Condicional from './Componentes/Condicional';
import Clique from './Componentes/Clique';
import Estado from './Componentes/Estado';
import EstadoCond from './Componentes/EstadoCond';
//import Lista from './Componentes/Lista'
//import Lista2 from './Componentes/Lista2'


function App() {
  return (
    <div className="App">
      <Condicional/>
      <Clique/>

      <Estado/>
      <EstadoCond/>

    </div>
  );
}

export default App;

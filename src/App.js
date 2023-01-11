import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";
import { useState } from "react";
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.


function App() {
  const [estado, setEstado] = useState(0);

  const incremento = (suma) => {
    setEstado(estado + suma);
  };
  return (
    <div className="App">
      <Cabecera cantidad={estado} />
      <Listado incremento={incremento} />
    </div>
  );
}

export default App;

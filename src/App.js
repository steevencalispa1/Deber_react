import React from "react";
import Encabezado from "./component/Encabezado";
import Personal from "./component/infoPersonal";
import Estudios from "./component/Estudios";
import Herramientas from "./component/Herramientas";
import Galeria from "./component/Galeria";
import "./App.css";

function App() {
  return (
    <div>
      {/* renderizadode los componenetes */}
      <Encabezado />
      <Personal />
      <Estudios />
      <Herramientas />
      <Galeria />
    </div>
  );
}

export default App;
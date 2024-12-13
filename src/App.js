import React from "react";
import bmximg from './imgs/bmx.jpg';
import ufcimg from './imgs/ufc.jpg';
import futimg from './imgs/fut.jpg';
import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="app_container">
      <div className="container">
        <h1 className="title">Tarea 1 - React</h1>
        <img src={logo} />
      </div>

      {/* Datos personales */}
      <section className="section">
        <h2>Datos Personales</h2>
        <ul>
          <li><strong>Nombre: </strong>Steeven Calispa</li>
          <li><strong>Direccion: </strong>Barrio San Vicente Limoncocha y Comana</li>
          <li><strong>Telefono: </strong>(02) 2006652</li>
          <li><strong>Correo electronico: </strong>marlocalispa@gmail.com</li>
        </ul>
      </section>

      {/* Lista de estudios realizados */}
      <section className="section">
        <h2>Lista de estudios realizados</h2>
        <ol>
          <li>BGU en Ciencias</li>
          <li>Curso de Desarrollo web</li>
        </ol>
      </section>

      {/* Lista de herramientas*/}
      <section className="section">
        <h2>Lista de herramientas utilizadas</h2>
        <ul>
          <li>React</li>
          <li>VS Code</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </section>

      {/* Galeria de deportes favoritos */}
      <section className="section">
        <h2>Galeria de Deportes Favoritos</h2>
        <div className="galeria">
          <div className="galeria_item">
            <img src={bmximg}/>
            <p>BMX</p>
          </div>
          <div className="galeria_item">
            <img src={ufcimg}/>
            <p>UFC</p>
          </div>
          <div className="galeria_item">
            <img src={futimg}/>
            <p>FUTBOL</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
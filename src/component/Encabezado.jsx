import React from 'react';
import logo from "../logo.svg";

const Encabezado = () => {
    return (
    <div>
        <div className="app_container">
        <div className="container">
        <h1 className="title">Tarea 1 - React</h1>
        <img src={logo}/>
        </div>
    </div>
    </div>
    );
};

export default Encabezado
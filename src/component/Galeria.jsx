import React from 'react';

const Galeria = () => {
    return (
    <div>
        {/* Galeria de deportes favoritos */}
        <section className="section">
            <h2>Galeria de Deportes Favoritos</h2>
            <div className="galeria">
                <div className="galeria_item">
                    <img src="./imgs/bmx.jpg"/>
                    <p>BMX</p>
                </div>
                <div className="galeria_item">
                    <img src="./imgs/ufc.jpg"/>
                    <p>UFC</p>
                </div>
                <div className="galeria_item">
                    <img src="./imgs/fut.jpg"/>
                    <p>FUTBOL</p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Galeria
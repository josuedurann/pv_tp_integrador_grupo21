import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/formulario">Agregar Producto</Link>
        </nav>
    );
};

export default Menu;
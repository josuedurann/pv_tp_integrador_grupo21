import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { limpiar } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
    const correo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <nav className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/formulario">Agregar Producto</Link>
            <Link to="/registro">Registro</Link>
            <button onClick={() => {
                localStorage.removeItem("sessionUser");
                dispatch(limpiar());
                window.location.href = "/";
            }}>Cerrar Sesion</button>
            {correo ? <p>Bienvenido {correo}</p> : null}
        </nav>
    );
};

export default Menu;
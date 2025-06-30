import { useSelector } from "react-redux";// Importamos el hook useSelector para acceder al estado global
import { Link } from "react-router-dom";// Importamos Link para navegación entre rutas sin recargar la página
import { limpiar } from "../redux/userSlice";// Importamos la acción para limpiar los datos del usuario al cerrar sesión
import { useDispatch } from "react-redux";// Importamos el hook useDispatch para despachar acciones

const Menu = () => {// Componente funcional Menu
    const correo = useSelector((state) => state.user);// Obtenemos el estado del usuario actual (correo electrónico)
    const dispatch = useDispatch();// Inicializamos dispatch para poder enviar acciones a Redux

    return (// Renderizamos el menú de navegación
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

export default Menu;// Exportamos el componente para poder usarlo en otras partes de la app

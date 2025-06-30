import { useSelector } from "react-redux";// Importamos el hook useSelector para acceder al estado global (Redux)
import { Navigate, Outlet } from "react-router-dom";// Importamos Navigate para redireccionar, y Outlet para renderizar rutas anidadas

export const PrivateRoute = () => {// Componente funcional que actúa como una ruta protegida

    const sessionUser = useSelector(state => state.user);// Obtenemos el usuario en sesión desde el estado global

    if (sessionUser)// Si hay un usuario logueado, renderizamos el contenido protegido (Outlet)

        return <Outlet/>;
    else
        return <Navigate to="/login"/>;// Si no hay sesión, redirigimos al login

};
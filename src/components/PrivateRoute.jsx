import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

    const sessionUser = useSelector(state => state.user);
    if (sessionUser)
        return <Outlet/>;
    else
        return <Navigate to="/login"/>;
};
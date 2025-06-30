import { BrowserRouter, Routes, Route } from 'react-router-dom' // taks para crear y usar rutas publicas y privadas
import './App.css'
import Home from './components/Home'
import Favoritos from './components/Favoritos'
import Menu from './components/Menu'
import DetalleProducto from './components/DetalleProducto'
import FormularioProducto from './components/FormularioProducto'
import Registro from './components/Registro'
import LogIn from './components/LogIn'
import { useEffect } from 'react' // Hook de React que permite ejecutar código cuando el componente se monta, se actualiza o se desmonta.
import axios from 'axios'// Librería para hacer peticiones HTTP
import { useDispatch } from 'react-redux' // Hook para poder enviar acciones a Redux. Te permite modificar el estado global.
import { setProductos } from './redux/prodSlice' //Importás una acción de Redux que cambia el estado global de productos
import { PrivateRoute } from './components/PrivateRoute' // función típica es restringir el acceso a ciertas rutas en una aplicación, permitiendo que solo los usuarios autenticados puedan ver ciertas páginas.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
          axios.get('https://fakestoreapi.com/products') // Hace una petición GET a la API fakestoreapi (trae productos falsos de ejemplo).
          .then((res) => { // Si llega la respuesta, se la pasa a setProductos(res.data) y la guarda en Redux.
              dispatch(setProductos(res.data));
          })
          .catch((err) => { //Si falla, lo muestra por consola.
              console.log(err.message);
          });
  }, [dispatch]); //  le dice a React que este useEffect solo se ejecute una vez al montar el componente, a menos que dispatch cambie
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/favoritos" element={<Favoritos />}/>
          <Route path="/producto/:id" element={<DetalleProducto />}/>
          <Route path="/formulario" element={<FormularioProducto />} />
          <Route path="/formulario/:id" element={<FormularioProducto />} />
          </Route>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Favoritos from './components/Favoritos'
import Menu from './components/Menu'
import DetalleProducto from './components/DetalleProducto'
import FormularioProducto from './components/FormularioProducto'
import Registro from './components/Registro'
import LogIn from './components/LogIn'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProductos } from './redux/prodSlice'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
          axios.get('https://fakestoreapi.com/products')
          .then((res) => {
              dispatch(setProductos(res.data));
          })
          .catch((err) => {
              console.log(err.message);
          });
  }, [dispatch]);
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

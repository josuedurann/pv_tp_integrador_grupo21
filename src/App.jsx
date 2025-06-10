import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Favoritos from './components/Favoritos'
import Menu from './components/Menu'
import DetalleProducto from './components/DetalleProducto'
import FormularioProducto from './components/FormularioProducto'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProductos } from './redux/prodSlice'

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
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />}/>
          <Route path="/producto/:id" element={<DetalleProducto />}/>
          <Route path="/formulario" element={<FormularioProducto />} />
          <Route path="/formulario/:id" element={<FormularioProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

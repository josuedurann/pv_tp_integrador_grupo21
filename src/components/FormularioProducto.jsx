import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { actualizarProducto, setProductos } from '../redux/prodSlice';
import TextField from '@mui/material/TextField';

function FormularioProducto() {
  const { id } = useParams();
  const productos = useSelector((state) => state.productos);
  const productoExistente = productos.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (productoExistente) {
      setProducto(productoExistente);
    }
  }, [productoExistente]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(producto.price <= 0) 
      return alert("El precio de producto debe ser mayor a 0");
    if (productoExistente) {
      dispatch(actualizarProducto({ ...productoExistente, ...producto }));
      navigate(-1);
    } else {
      const idNuevo = productos.length !== 0 ? Math.max(...productos.map((a) => a.id)) + 1 : 1;
      dispatch(setProductos([...productos, { ...producto, id: idNuevo , rating: { rate: 0, count: 0 }}]));
      navigate("/");
    }
    
  };

  const blanco = {
    inputLabel: {style: {color: 'white'}}
  }

  return (
    <div className="formulario-page">
      <h1>{productoExistente ? "Editar Producto" : "Crear Producto"}</h1>
      <form onSubmit={onSubmit} className="formulario-card">
        <TextField slotProps={blanco} label="Título" name="title" value={producto.title} onChange={onChange} required />
        <TextField slotProps={blanco} label="Precio" name="price" value={producto.price} onChange={onChange} required type="number" />
        <TextField slotProps={blanco} label="Categoría" name="category" value={producto.category} onChange={onChange} required />
        <TextField slotProps={blanco} label="Imagen" name="image" value={producto.image} onChange={onChange} required/>
        <TextField slotProps={blanco} label="Descripción" name="description" value={producto.description} onChange={onChange} required multiline/>
        <button type="submit">{productoExistente ? "Guardar cambios" : "Agregar producto"}</button>
      </form>
    </div>
  );
}

export default FormularioProducto;

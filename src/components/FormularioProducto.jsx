import React, { useState, useEffect } from 'react';// Importamos React y los hooks necesarios
import { useSelector, useDispatch } from 'react-redux';// Hooks de Redux para acceder al estado global y despachar acciones
import { useParams, useNavigate } from 'react-router-dom';// Hooks de React Router para obtener parámetros de la URL y navegar
import { actualizarProducto, setProductos } from '../redux/prodSlice';// Acciones del slice de productos
import TextField from '@mui/material/TextField';// Componente de Material UI para los campos del formulario

function FormularioProducto() {// Componente funcional FormularioProducto
  const { id } = useParams();// Obtenemos el ID desde la URL
  const productos = useSelector((state) => state.productos);  // Obtenemos los productos desde el estado global
  const productoExistente = productos.find((p) => p.id === parseInt(id));  // Buscamos el producto existente si estamos en modo edición
  const dispatch = useDispatch();// Inicializamos el hook para despachar acciones
  const navigate = useNavigate();// Inicializamos el hook para redirigir al usuario


  const [producto, setProducto] = useState({  // Estado local para almacenar los valores del formulario
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {// Si hay un producto existente (modo edición), lo cargamos en el formulario
    if (productoExistente) {
      setProducto(productoExistente);
    }
  }, [productoExistente]);

  const onChange = (e) => {// Maneja los cambios en los campos del formulario
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));// Actualiza solo la propiedad del producto que fue modificada

  };

  const onSubmit = (e) => {  // Maneja el envío del formulario
    e.preventDefault();// Previene el comportamiento por defecto del formulario
    if (productoExistente) {     
      dispatch(actualizarProducto({ ...productoExistente, ...producto })); // Si ya existe, despachamos la acción para actualizarlo
      navigate(-1);// Volvemos a la página anterior
    } else {
      const idNuevo = productos.length !== 0 ? Math.max(...productos.map((a) => a.id)) + 1 : 1;// Si es un producto nuevo, generamos un ID único
      dispatch(setProductos([...productos, { ...producto, id: idNuevo , rating: { rate: 0, count: 0 }}]));// Agregamos el nuevo producto con un rating inicial
      navigate("/");// Redirigimos al usuario al inicio

    }
    
  
}
  return (// Estructura visual del formulario
    <div className="formulario-page">
      <h1>{productoExistente ? "Editar Producto" : "Crear Producto"}</h1>
      <form onSubmit={onSubmit} className="formulario-card">
        <TextField label="Título" name="title" value={producto.title} onChange={onChange} required />
        <TextField label="Precio" name="price" value={producto.price} onChange={onChange} required type="number" />
        <TextField label="Categoría" name="category" value={producto.category} onChange={onChange} required />
        <TextField label="Imagen" name="image" value={producto.image} onChange={onChange} required />
        <TextField label="Descripción" multiline name="description" value={producto.description} onChange={onChange} required />
        <button type="submit">{productoExistente ? "Guardar cambios" : "Agregar producto"}</button>
      </form>
    </div>
  );
}

export default FormularioProducto;// Exportamos el componente para poder usarlo en otras partes de la app


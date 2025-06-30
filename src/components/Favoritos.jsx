import { useSelector, useDispatch } from "react-redux";// Importamos los hooks necesarios de react-redux para acceder al estado global y despachar acciones
import { Link } from "react-router-dom";// Importamos Link para la navegación entre rutas sin recargar la página
import { clickFavorito } from "../redux/favSlice";// Importamos la acción que permite marcar o desmarcar un producto como favorito

const Favoritos = () => {// Componente funcional Favoritos
  const productos = useSelector((state) => state.productos); // Obtenemos la lista completa de productos desde el estado global
  const favoritos = useSelector((state) => state.favoritos);  // Obtenemos la lista de IDs de productos marcados como favoritos
  const dispatch = useDispatch();  // Hook para despachar acciones a Redux
  const productosFavoritos = productos.filter((p) =>   // Filtramos los productos para quedarnos solo con los que están en la lista de favoritos
    favoritos.includes(p.id)
  );
  if (productosFavoritos.length === 0) { // Si no hay productos favoritos, mostramos un mensaje y un botón para volver al inicio
    return (
      <div className="container">
        <h1>Productos Favoritos</h1>
        <p>No tenes productos en favoritos.</p>
        <Link to="/">
          <button className="btn-volver">Volver al inicio.</button>
        </Link>
      </div>
    );
  }
  return (  // Si hay productos favoritos, los mostramos en una lista de tarjetas
    <div className="container">
      <h1>Productos Favoritos</h1>
      <div className="lista">
        {productosFavoritos.map((producto) => (
          <div className="card" key={producto.id}>
            <img
              src={producto.image}
              alt={producto.title}
              className="imagen-producto"
            />
            <h3>{producto.title}</h3>
            <p className="precio">${producto.price}</p>
            <p>Categoría del producto: {producto.category}</p>

            <button
              onClick={() => dispatch(clickFavorito(producto.id))}
              aria-label="Quitar de favoritos"
              className="btn-fav"
            >
              💖
            </button>
            <Link to={`/producto/${producto.id}`}>
              <button className="btn-detalle">Ver más detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favoritos;// Exportamos el componente para poder usarlo en otras partes de la aplicación


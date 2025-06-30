import { useSelector, useDispatch } from "react-redux"; //use selector: Te deja leer datos del store de Redux. useDispatch: Te permite enviar acciones a Redux. 
import { Link } from "react-router-dom"; // Para hacer navegación entre páginas sin recargar la app
import { clickFavorito } from "../redux/favSlice"; // Acción que alterna un producto en favoritos. Lo usás al hacer clic en el corazoncito
import AddCircleIcon from '@mui/icons-material/AddCircle'; // Ícono de Material UI, un círculo con un "+", que se muestra en la tarjetita "Agregar Producto"
import Rating from '@mui/material/Rating';

const Home = () => {
  const productos = useSelector((state) => state.productos); // lista completa de productos cargados.
  const favoritos = useSelector((state) => state.favoritos); // lista de IDs que el usuario marcó como favoritos
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Lista de Productos</h1>

      <div className="lista">
        {productos.length === 0 ? (
          <p>No hay productos disponibles en este momento</p>
        ) : (
          productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img
                src={producto.image}
                alt={producto.title}
                className="imagen-producto"
              />
              <h3>{producto.title}</h3>
              <p className="precio">${producto.price}</p>

              <Rating value={producto.rating.rate} precision={0.1} readOnly />

              <p>Categoría: {producto.category}</p>

              <button
                onClick={() => dispatch(clickFavorito(producto.id))}
                className="btn-fav"
                aria-label="Marcar como favorito"
              >
                {favoritos.includes(producto.id) ? "💖" : "🤍"}  
              </button>
              
              <Link to={`/producto/${producto.id}`}>
                <button className="btn-detalle">Ver más detalles</button>
              </Link>
            </div>
          ))
        )}
        <div className="card add-card">
          <AddCircleIcon sx={{ fontSize: 120 }}/>
          <Link to="/formulario">
            <button className="btn-agregar">Agregar Producto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

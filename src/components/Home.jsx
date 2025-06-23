import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clickFavorito } from "../redux/favSlice";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Rating from '@mui/material/Rating';

const Home = () => {
  const productos = useSelector((state) => state.productos);
  const favoritos = useSelector((state) => state.favoritos);
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

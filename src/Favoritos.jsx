import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clickFavorito } from "../redux/favSlice";

const Favoritos = () => {
  const productos = useSelector((state) => state.productos);
  const favoritos = useSelector((state) => state.favoritos);
  const dispatch = useDispatch();
  const productosFavoritos = productos.filter((p) =>
    favoritos.includes(p.id)
  );
  if (productosFavoritos.length === 0) {
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
  return (
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
export default Favoritos;

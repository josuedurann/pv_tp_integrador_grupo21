import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setProductos } from '../redux/prodSlice';
import { clickFavorito } from '../redux/favSlice';

function DetalleProducto() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const productos = useSelector((state) => state.productos);
  const favoritos = useSelector((state) => state.favoritos);
  
  const productoActual = productos.find((item) => item.id === parseInt(id));

  if (!productoActual) {
    return <div className="error">Producto no encontrado</div>;
  }

  const esProductoFavorito = favoritos.includes(productoActual.id);

  const eliminarProducto = () => {
    const productosActualizados = productos.filter((item) => item.id !== productoActual.id);
    dispatch(setProductos(productosActualizados));
    navigate(-1);
  };

  return (
    <div className="card">
        <div className="infosection">
          <div className="productoheader">
            <h1 className="productotitulo">{productoActual.title}</h1>
            <span className="productocategoria">{productoActual.category}</span>
          </div>

          <div className="imagensection">
            <img
              src={productoActual.image}
              alt={productoActual.title}
              className="productoimagen"
            />
          </div>

          <div className="precio">
            <span className="preciovalor">${productoActual.price}</span>
          </div>
          
          <div className="descripcioncontainer">
            <p className="productodescripcion">{productoActual.description}</p>
          </div>
          
          <div className="stockinfo">
            <span className="stocklabel">Disponible:</span>
            <span className="stockcantidad">{productoActual.rating.count} unidades</span>
          </div>
          
          <div className="botones">
            <button
              onClick={() => dispatch(clickFavorito(productoActual.id))}
              className={`botonfavorito ${esProductoFavorito ? 'favoritoactivo' : 'favoritoinactivo'}`}
            >
              {esProductoFavorito ? "💖 Remover favorito" : "🤍 Marcar favorito"}
            </button>
            
            <button 
              onClick={() => navigate(`/formulario/${productoActual.id}`)} 
              className="botoneditar"
            >
              Modificar producto
            </button>
            
            <button onClick={eliminarProducto} className="botoneliminar">
              Eliminar
            </button>
            
            <button onClick={() => navigate(-1)} className="botonvolver">
              ← Regresar
            </button>
          </div>
        </div>
      </div>
  );
}

export default DetalleProducto;
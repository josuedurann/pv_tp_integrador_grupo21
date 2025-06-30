import { useSelector, useDispatch } from 'react-redux'; // Importamos hooks de react-redux para acceder al estado global y despachar acciones
import { useParams, useNavigate } from 'react-router-dom';// Importamos hooks de react-router para obtener parámetros de la URL y navegar entre páginas
import { setProductos } from '../redux/prodSlice';// Importamos la acción para actualizar la lista de productos
import { clickFavorito } from '../redux/favSlice';// Importamos la acción para agregar o quitar un producto de favoritos


function DetalleProducto() {// Definimos el componente funcional DetalleProducto
  const { id } = useParams();  // Obtenemos el parámetro "id" de la URL
  const dispatch = useDispatch();  // Hook para despachar acciones a Redux
  const navigate = useNavigate();  // Hook para navegar programáticamente entre rutas

  const productos = useSelector((state) => state.productos);  // Obtenemos del estado global la lista de productos
  const favoritos = useSelector((state) => state.favoritos);   // Obtenemos del estado global la lista de favoritos (ids de productos)

  
  const productoActual = productos.find((item) => item.id === parseInt(id));  // Buscamos el producto actual según el id obtenido de la URL

  if (!productoActual) {   // Si no se encuentra el producto, mostramos un mensaje de error
    return <div className="error">Producto no encontrado</div>;
  }

  const esProductoFavorito = favoritos.includes(productoActual.id);  // Verificamos si el producto actual está marcado como favorito

  const eliminarProducto = () => {  // Función para eliminar el producto
    const productosActualizados = productos.filter((item) => item.id !== productoActual.id); // Filtramos el producto actual de la lista de productos
    dispatch(setProductos(productosActualizados)); // Actualizamos el estado global con la nueva lista sin el producto eliminado
    navigate(-1);// Navegamos hacia la página anterior
  };

  return ( // JSX que se renderiza en pantalla
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

export default DetalleProducto;// Exportamos el componente para poder usarlo en otras partes de la app

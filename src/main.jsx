import { StrictMode } from 'react' // cubria el app antes de poner el prodiver
import { createRoot } from 'react-dom/client' // se usa para renderizar tu app React en el DOM.
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' // para conectar react con redux
import store from './redux/store' //mporta la tienda (store) de Redux. Este objeto maneja todo el estado global de la app (productos, favoritos, etc.). 
//Es como el cerebro compartido entre tus componentes.
import './estilos.css'

createRoot(document.getElementById('root')).render( //Busca en el HTML la etiqueta con id "root", que es donde se inyecta tu app React.
  <Provider store={store}>
    <App />
  </Provider>
)

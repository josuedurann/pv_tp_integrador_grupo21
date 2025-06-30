import TextField from '@mui/material/TextField';// Importamos el componente TextField de Material UI para los campos del formulario
import { useSelector } from 'react-redux';// Importamos useSelector por si se necesitara acceder al estado global (aunque no se usa aquí)

function LogIn() {// Componente funcional LogIn
  const users = JSON.parse(localStorage.getItem('users'));  // Obtenemos la lista de usuarios desde el localStorage y la convertimos en objeto con JSON.parse
  //console.log(users);
  const onSubmit = (e) => {  // Función que se ejecuta al enviar el formulario
    e.preventDefault();// Previene el comportamiento por defecto (recargar la página)
    const validacion = users.find(user => user.email === e.target.email.value && user.password === e.target.password.value);// Buscamos si hay un usuario que coincida con el email y contraseña ingresados

    if(validacion) {// Si las credenciales son válidas
        localStorage.setItem("sessionUser", e.target.email.value);// Guardamos el email del usuario en el localStorage para simular una sesión iniciada
        window.location.href = "/";// Redirigimos a la página principal
    }else{
        alert("Credenciales inválidas");// Si no coincide, mostramos un mensaje de error
    }
  };

  const blanco = {// Objeto para aplicar estilo blanco a los labels de los TextFields
    inputLabel: {style: {color: 'white'}}
  }

  return (// Retornamos el formulario de inicio de sesión
    <div className="formulario-page">
      <h1>Iniciar sesion</h1>
      <form onSubmit={onSubmit} className="formulario-card">
        <TextField slotProps={blanco} label="Correo Electronico" name="email" required type="email"/>
        <TextField slotProps={blanco} label="Contraseña" name="password" required type="password" />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}

export default LogIn;// Exportamos el componente para que pueda ser usado en la aplicación


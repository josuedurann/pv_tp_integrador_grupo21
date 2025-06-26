import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

function LogIn() {
  const users = JSON.parse(localStorage.getItem('users'));
  //console.log(users);
  const onSubmit = (e) => {
    e.preventDefault();
    const validacion = users.find(user => user.email === e.target.email.value && user.password === e.target.password.value);
    if(validacion) {
        localStorage.setItem("sessionUser", e.target.email.value);
        window.location.href = "/";
    }else{
        alert("Credenciales inválidas");
    }
  };

  const blanco = {
    inputLabel: {style: {color: 'white'}}
  }

  return (
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

export default LogIn;

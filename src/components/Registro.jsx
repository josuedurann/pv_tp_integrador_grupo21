import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Registro() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const registrar = (user) => {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
      e.preventDefault();
      if(user.password !== e.target.check.value){
        alert("Las contraseñas no coinciden");
        return;
      }
      if(user.password.length < 6){
          alert("La contraseña debe tener al menos 6 caracteres");
          return;
      }
      registrar(user);
      alert("Registrado con exito");
      navigate("/LogIn");
    };

  const blanco = {
    inputLabel: {style: {color: 'white'}}
  }

  return (
    <div className="formulario-page">
      <h1>Registrarse</h1>
      <form onSubmit={onSubmit} className="formulario-card">
        <TextField slotProps={blanco} label="Nombre" name="name" onChange={onChange} value={user.name} required />
        <TextField slotProps={blanco} label="Correo Electronico" name="email" onChange={onChange} value={user.email} required type="email"/>
        <TextField slotProps={blanco} label="Contraseña" name="password" onChange={onChange} value={user.password} required type="password" />
        <TextField slotProps={blanco} label="Confirmar Contraseña" name="check" required type="password" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

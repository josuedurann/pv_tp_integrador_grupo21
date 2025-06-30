import { useNavigate } from 'react-router-dom';// Importamos el hook useNavigate para redirigir al usuario luego del registro
import TextField from '@mui/material/TextField';// Importamos TextField de Material UI para los inputs estilizados
import { useState } from 'react';// Importamos useState para manejar el estado local del formulario

function Registro() {// Componente funcional Registro
  const navigate = useNavigate();// Hook para redireccionar a otra página
  const [user, setUser] = useState({// Estado local que almacena los datos del nuevo usuario

    name: "",
    email: "",
    password: "",
  });
  
  const users = JSON.parse(localStorage.getItem('users')) || [];// Obtenemos los usuarios existentes desde localStorage o un array vacío si no hay ninguno

  const registrar = (user) => {// Función que guarda el nuevo usuario en localStorage
    users.push(user);// Agregamos el nuevo usuario
    localStorage.setItem('users', JSON.stringify(users));// Guardamos la lista actualizada
  }
  const onChange = (e) => {// Manejador de cambio de campos del formulario
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));// Actualizamos solo la propiedad modificada del estado
  };
  const onSubmit = (e) => {// Manejador del envío del formulario
      e.preventDefault();// Prevenimos que la página se recargue
      if(user.password !== e.target.check.value){// Verificamos que las contraseñas coincidan
        alert("Las contraseñas no coinciden");
        return;
      }
      if(user.password.length < 6){// Validamos que la contraseña tenga al menos 6 caracteres
          alert("La contraseña debe tener al menos 6 caracteres");
          return;
      }
      registrar(user);// Si todo está bien, registramos al usuario
      alert("Registrado con exito");
      navigate("/LogIn");// Redirigimos al usuario a la página de login
    };

  const blanco = {// Estilo blanco para las etiquetas de los campos
    inputLabel: {style: {color: 'white'}}
  }

  return (// JSX del formulario de registro
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

export default Registro;// Exportamos el componente para poder usarlo en otras partes de la app

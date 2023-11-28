import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createuser, setCreateuser] = useState("");
  const [ingcorreo, setIngcorreo] = useState("");
  const [passnew, setPassnew] = useState("");
  const [repeatpass, setRepeatpass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [btningresar, setbtnIngresar] = useState(false);
  const [btnregistar, setbtnRegistrar] = useState(false);


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
  
    if (!username || !password) {
      setLoginError("Todos los campos son obligatorios");
      return;
    }
  
    try {
      setbtnIngresar(true);
      const loginUrl = 'https://galeria-arte-api.onrender.com/nosql/artistas/login';
  
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_artista: username, contrasenia_artista: password, imagen: imageUrl }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la autenticación');
      }
  
      const responseData = await response.json();
      console.log("Autenticación exitosa", responseData);
  
      if (responseData.token) {
        window.localStorage.setItem("token", responseData.token);
        window.localStorage.setItem("id", responseData.id);
        window.localStorage.setItem("username", responseData.username || username);
        window.location.href = '/';
      } else {
        throw new Error("No se recibió el token");
      }
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setbtnIngresar(false);
    }
  };
  

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterError("");

    // Validación de los campos, incluyendo la nueva URL de la imagen
    if (!createuser || !ingcorreo || !passnew || !repeatpass || !imageUrl) {
      setRegisterError("Todos los campos son obligatorios");
      return;
    }

    if (passnew !== repeatpass) {
      setRegisterError("Las contraseñas no coinciden");
      return;
    }
    const userData = {
      nombre_artista: createuser,
      correo_artista: ingcorreo,
      contrasenia_artista: passnew,
      imagen: imageUrl, 
    };


    try {
      setbtnRegistrar(true);

      const response = await fetch('https://galeria-arte-api.onrender.com/nosql/artistas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el cliente');
        
      }
      
      else {
        // Asumiendo que la respuesta incluye algún identificador de usuario o nombre
        const responseData = await response.json();
        window.localStorage.setItem("userImage", imageUrl); // Guarda la URL de la imagen
        window.localStorage.setItem("username", responseData.username || createuser); // Guarda el nombre del usuario
        // ... más lógica, como redireccionamiento o actualización de la interfaz ...
      }
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el cliente');
      } else {
        alert("Registro exitoso. Por favor inicie sesión.");
        setRegisterSuccess("Registro exitoso. Por favor inicie sesión.");
        // Puedes agregar lógica adicional aquí si es necesario
      }

      setTimeout(() => {
        window.location.reload();
      }, 3000);

    } catch (error) {
      setRegisterError(error.message);
    } finally {
      setbtnRegistrar(false);
    }
  };


  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-section">
          <h2>Acceder</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Correo electrónico:
              <input
                className="input-field"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={btningresar}
              />
            </label>
            <label>
              Contraseña:
              <input
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={btningresar}
              />
            </label>
            <button className="submit-btn" type="submit" disabled={btningresar}>
              {btningresar ? "Cargando..." : "Acceder"}
            </button>
            {loginError && <p className="error-msg">{loginError}</p>}
          </form>
        </div>
        <div className="form-section">
          <h2>Registrarse</h2>
          <form onSubmit={handleRegisterSubmit}>
            <label>
              Nombre y apellido:
              <input
                className="input-field"
                type="text"
                value={createuser}
                onChange={(e) => setCreateuser(e.target.value)}
                disabled={btnregistar}
              />
            </label>
            <label>
              Correo electrónico:
              <input
                className="input-field"
                type="text"
                value={ingcorreo}
                onChange={(e) => setIngcorreo(e.target.value)}
                disabled={btnregistar}
              />
            </label>
            <label>
              Crear contraseña:
              <input
                className="input-field"
                type="password"
                value={passnew}
                onChange={(e) => setPassnew(e.target.value)}
                disabled={btnregistar}
              />
            </label>
            <label>
              Repetir contraseña:
              <input
                className="input-field"
                type="password"
                value={repeatpass}
                onChange={(e) => setRepeatpass(e.target.value)}
                disabled={btnregistar}
              />
            </label>
            <label>
            URL de la Imagen:
            <input
              className="input-field"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={btnregistar}
            />
          </label>

            <button className="submit-btn" type="submit" disabled={btnregistar}>
              {btnregistar ? "Cargando..." : "Registrar cuenta"}
            </button>
            {registerError && <p className="error-msg">{registerError}</p>}
            {registerSuccess && <p className="success-msg">{registerSuccess}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

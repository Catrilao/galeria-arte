import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createuser, setCreateuser] = useState("");
  const [ingcorreo, setIngcorreo] = useState("");
  const [passnew, setPassnew] = useState("");
  const [repeatpass, setRepeatpass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
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
      const loginUrl = 'https://galeria-arte-api.onrender.com/sql/clientes/login';

      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_cliente: username, contrasenia_cliente: password }),
      });

      if (!response.ok) {

        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la autenticación');
      }

      const responseData = await response.json();
      console.log("Autenticación exitosa", responseData);

      if (responseData.token) {
        window.localStorage.setItem("token", responseData.token);
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
    if (!createuser || !ingcorreo || !passnew || !repeatpass) {
      setRegisterError("Todos los campos son obligatorios");
      return;
    }

    if (passnew !== repeatpass) {
      setRegisterError("Las contraseñas no coinciden");
      return;
    }

    const userData = {
      nombre: createuser,
      correo: ingcorreo,
      contrasenia: passnew,
    };

    try {
      setbtnRegistrar(true);

      const response = await fetch('https://galeria-arte-api.onrender.com/clientes', {
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
            <button className="submit-btn" type="submit" disabled={btnregistar}>
              {btnregistar ? "Cargando..." : "Registrar cuenta"}
            </button>
            {registerError && <p className="error-msg">{registerError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

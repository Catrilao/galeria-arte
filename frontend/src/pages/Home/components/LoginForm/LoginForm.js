import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [createuser, setCreateuser] = useState('');
    const [ingcorreo, setIngcorreo] = useState('');
    const [passnew, setPassnew] = useState('');
    const [repeatpass, setRepeatpass] = useState('');
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');

        if (!username || !password) {
            setLoginError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true);
        console.log("Datos enviados:", { username, password });

        setTimeout(() => {
            setLoading(false);
            console.log('Autenticación exitosa');
        }, 2000);
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setRegisterError('');

        if (!createuser || !ingcorreo || !passnew || !repeatpass) {
            setRegisterError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true);
        console.log("Datos enviados:", { createuser, ingcorreo, passnew, repeatpass });

        setTimeout(() => {
            setLoading(false);
            console.log('Registro exitoso');
        }, 2000);
    }

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
                                onChange={e => setUsername(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <label>
                            Contraseña:
                            <input
                                className="input-field"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <button className="submit-btn" type="submit" disabled={loading}>
                            {loading ? 'Cargando...' : 'Acceder'}
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
                                onChange={e => setCreateuser(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <label>
                            Correo electrónico:
                            <input
                                className="input-field"
                                type="text"
                                value={ingcorreo}
                                onChange={e => setIngcorreo(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <label>
                            Crear contraseña:
                            <input
                                className="input-field"
                                type="password"
                                value={passnew}
                                onChange={e => setPassnew(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <label>
                            Repetir contraseña:
                            <input
                                className="input-field"
                                type="password"
                                value={repeatpass}
                                onChange={e => setRepeatpass(e.target.value)}
                                disabled={loading}
                            />
                        </label>
                        <button className="submit-btn" type="submit" disabled={loading}>
                            {loading ? 'Cargando...' : 'Registrar cuenta'}
                        </button>
                        {registerError && <p className="error-msg">{registerError}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

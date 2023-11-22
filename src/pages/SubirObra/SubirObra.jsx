import React, { useState } from "react";
import "./SubirObra.css";
import { Link } from "react-router-dom";

const SubirObra = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`container ${submitted ? "submitted" : ""}`}>
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title">Nueva Obra</span>
        </div>
        {!submitted ? (
          <div className="modal__body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input">
                <label className="input__label">Imagen por subir</label>
                <input
                  className="input__field"
                  type="file"
                  name="file_upload"
                />
              </div>
              <div className="input">
                <label className="input__label">
                  O Pegar la URL de la imagen
                </label>
                <input className="input__field" type="text" name="image_url" />
              </div>
              <div className="input">
                <label className="input__label">Nombre obra</label>
                <input className="input__field" type="text" />
                <p className="input__description">
                  El título debe contener un máximo de 32 caracteres
                </p>
              </div>
              <div className="input">
                <label className="input__label">Descripción</label>
                <textarea className="input__field input__field--textarea"></textarea>
                <p className="input__description"></p>
              </div>
              <div className="modal__footer">
                <button className="button button--primary" type="submit">
                  Subir obra
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="success-message">
            Su solicitud ha sido registrada
            <Link to="/" className="link-to-form">
              Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubirObra;

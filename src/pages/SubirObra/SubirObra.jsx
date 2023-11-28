import React, { useState } from "react";
import "./SubirObra.css";
import { Link } from "react-router-dom";

const SubirObra = () => {
  const [submitted, setSubmitted] = useState(false);
  const [canceled, setCanceled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form data:', Array.from(formData.entries()));
    const imageUrl = formData.get("image_url");
    const name = formData.get("name");
    const description = formData.get("description");
    const id = window.localStorage.getItem("id");

    try {
        const response = await fetch("https://galeria-arte-api.onrender.com/nosql/obras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo: name, descripcion_obra: description, imagenes: imageUrl, id }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Error al subir la obra");
      }
    } catch (error) {
      console.error("Error al subir la obra:", error);
    }
  };

  const handleCancel = () => {
    setCanceled(true);
  };

  return (
    <div className={`container ${submitted ? "submitted" : ""}`}>
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title">Nueva Obra</span>
        </div>
        {!submitted && !canceled ? (
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
                <input className="input__field" name="name" type="text" />
                <p className="input__description">
                  El título debe contener un máximo de 32 caracteres
                </p>
              </div>
              <div className="input">
                <label className="input__label">Descripción</label>
                <textarea className="input__field input__field--textarea" name="description"></textarea>
                <p className="input__description"></p>
              </div>
              <div className="modal__footer">
                <button className="button button--primary" type="submit">
                  Subir
                </button>
                <button
                  className="button button--cancel"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        ) : submitted ? (
          <div className="success-message">
            Su solicitud ha sido registrada
            <Link to="/" className="link-to-form">
              Inicio
            </Link>
          </div>
        ) : (
          <div className="abandon-message">
            Su solicitud ha sido cancelada
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

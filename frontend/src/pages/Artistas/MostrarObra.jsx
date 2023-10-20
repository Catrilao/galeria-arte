import React from "react";
import imagenes from "../../../Artistas/assets.jsx";

function MostrarObra() {
  return (
    <div>
      {imagenes.map((imagen) => (
        <div key={imagen.id}>
          <img src={imagen.url} alt={imagen.titulo} />
        </div>
      ))}
    </div>
  );
}
export default MostrarObra;

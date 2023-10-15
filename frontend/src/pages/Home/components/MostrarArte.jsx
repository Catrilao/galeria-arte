/*import {
    Box,
    TablePagination,
} from "@mui/material";*/

import React from "react";
import imagenes from "../../../imgs/imagen.js";


function MostrarCuadros(){
    
    return (
        <div>
          {imagenes.map((imagen) => (
            <div key={imagen.id}>
              <h2>{imagen.titulo}</h2>
              <img src={imagen.url} alt={imagen.titulo} />
              <h3>Autor: {imagen.Autor}</h3>
              <h3>Precio: {imagen.price}</h3>
            </div>
          ))} 
            
        </div>
    );
}
export default MostrarCuadros;
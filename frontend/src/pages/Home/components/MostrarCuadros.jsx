import React from "react";
import Slider from "react-slick";
import imagenes from "../../../imgs/imagen.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MostrarCuadros.css';

function MostrarCuadros() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true, // Agregar flechas
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h1 className="highlighted-text">Obras de nuestra galería destacadas</h1>
      <Slider {...settings}>
        {imagenes.map((imagen) => (
          <div key={imagen.id} className="carousel-item">
            <h2 className="image-title">{imagen.titulo}</h2>
            <img src={imagen.url} alt={imagen.titulo} className="carousel-image" />
            <div className="image-details">
              <h3>Autor: {imagen.Autor}</h3>
              <h3>Precio: {imagen.price}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default MostrarCuadros;

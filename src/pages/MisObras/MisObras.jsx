import React, { useEffect, useState } from 'react';

const MisObras = () => {
  const [obras, setObras] = useState([]);
  const id = window.localStorage.getItem('id');

  useEffect(() => {
    fetch(`https://galeria-arte-api.onrender.com/nosql/artistas/misObras/${id}`)
      .then(response => response.json())
      .then(data => {
        setObras(data.obras);
      })
      .catch(error => {
        console.error('Error fetching artwork:', error);
      });
  }, [id]);

  return (
    <div>
      {obras.map((obra) => (
        <div key={obra._id}>
          <h2>{obra.titulo}</h2>
          <p>{obra.descripcion_obra}</p>
          <img src={obra.imagenes[0]} alt={obra.titulo} />
        </div>
      ))}
    </div>
  );
};

export default MisObras;
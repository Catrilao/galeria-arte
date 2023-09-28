import React, { useState, useEffect, useCallback } from 'react'

const Clientes = () => {
  const PORT = process.env.PORT || 5000

  const [datos, setDatos] = useState([])

  const getDatos = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:${PORT}/obrasArtista`)
      const data = await res.json()
      setDatos(data)
    } catch {
      console.log('Error al obtener los datos')
    }
  }, [PORT])

  useEffect(() => {
    getDatos()
  }, [getDatos])

  return (
    <div>
      {datos.map((dato) => (
        <div key={dato.id_obra}>
          <p>Nombre Artista: {dato.nombre_artista}</p>
          <p>Título: {dato.titulo}</p>
          <p>Año de Creación: {dato.anio_creacion}</p>
          <p>Precio: {dato.precio}</p>
          <p>Ruta: {dato.ruta}</p>
        </div>
      ))}
    </div>
  )
}

export default Clientes;

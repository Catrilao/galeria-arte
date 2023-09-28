import React, { useState, useEffect, useCallback } from 'react'

const Clientes = () => {
  const PORT = process.env.PORT || 5000

  const [clientes, setClientes] = useState([])
  const [obras, setObras] = useState([])
  const [imagenes, setImagenes] = useState([])

  const getClientes = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:${PORT}/clientes`)
      const data = await res.json()
      setClientes(data)
    } catch {
      console.log('Error al obtener los clientes')
    }
  }, [PORT])

  const getObras = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:${PORT}/obras`)
      const data = await res.json()
      setObras(data)
    } catch {
      console.log('Error al obtener las obras')
    }
  }, [PORT])

  const getImagenes = useCallback(async () => {
    try {
      const promesa = obras.map(async (obra) => {
        const id = obra.id_obra        
        const res = await fetch(`http://localhost:${PORT}/imagenes/${id}}`)
        const data = await res.json()
        
        return data
      })
      const imagenes = await Promise.all(promesa)
      
      setImagenes(imagenes)
    } catch {
      console.log('Error al obtener las imagenes')
    }
  }, [PORT, obras])

  useEffect(() => {
    getClientes()
    getObras()
  }, [getClientes, getObras])

  useEffect(() => {
    getImagenes()
  }, [getImagenes])

  return (
    <div>
      <div>
        {clientes.map(cliente => (
            <p key={cliente.id_cliente}>{cliente.nombre_cliente}</p>
        ))}
      </div>
      <div>
        {obras.map(obra => (
            <p key={obra.id_obra}>{obra.titulo_obra}</p>
        ))}
      </div>
      <div>
        {imagenes.map(imagen => (
            <p key={imagen.id_imagen}>{imagen.ruta}</p>
        ))}
      </div>
    </div>
  )
}

export default Clientes;

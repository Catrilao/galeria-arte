import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const Clientes = () => {
  const [clientes, setClientes] = useState([])

  const PORT = process.env.PORT || 5000

  const getClientes = useCallback(async () => {
    const res = await Axios.get(`http://localhost:${PORT}/clientes`)
    setClientes(res.data)
  }, [PORT])
  
  useEffect(() => {
    const fetchClientes = async () => {
      getClientes()
    }
    fetchClientes()
  }, [getClientes])

  return (
    <div>
        {clientes.map(cliente => (
            <p key={cliente.id_cliente}>{cliente.nombre_cliente}</p>
        ))}
    </div>
  )
}

export default Clientes;

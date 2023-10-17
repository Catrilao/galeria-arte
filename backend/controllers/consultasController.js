export class ConsultasController {
  constructor ({ Consultas }) {
    this.Consultas = Consultas
  }

  getClientes = async (_, res) => {
    const clientes = await this.Consultas.getClientes()
    if (clientes) return res.json(clientes)

    res.status(404).send('No se encontraron clientes')
  }

  getArtistas = async (_, res) => {
    const artistas = await this.Consultas.getArtistas()
    if (artistas) return res.json(artistas)

    res.status(404).send('No se encontraron artistas')
  }

  getObras = async (_, res) => {
    const obras = await this.Consultas.getObras()

    if (obras) return res.json(obras)

    res.status(404).send('No se encontraron obras')
  }

  // TODO agregar id_obra a la consulta
  getImagenes = async (req, res) => {
    const id = req.params.id
    const imagenes = await this.Consultas.getImagenes({ id })

    if (imagenes) return res.json(imagenes)

    res.status(404).send('No se encontraron imagenes')
  }

  getObrasArtista = async (_, res) => {
    const datos = await this.Consultas.getObrasArtista()

    if (datos) return res.json(datos)

    res.status(404).send('No se encontraron datos')
  }

  createCliente = async (req, res) => {
    const datosCliente = req.body
    const cliente = await this.Consultas.createCliente(datosCliente)

    if (cliente) return res.json(cliente)

    res.status(404).send('No se pudo crear el cliente')
  }
}

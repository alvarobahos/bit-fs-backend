class ProductosController {
  constructor() {}

  async crear(solicitud, respuesta) {
    respuesta.json({ mensaje: "crear,listo", data: null });
  }

  async leerTodos(solicitud, respuesta) {
    respuesta.json({ mensaje: "leerTodos,listo", data: null });
  }

  async leerUno(solicitud, respuesta) {
    respuesta.json({ mensaje: "leerUno,listo", data: null });
  }

  async actualizar(solicitud, respuesta) {
    respuesta.json({ mensaje: "actualizar,listo", data: null });
  }

  async eliminar(solicitud, respuesta) {
    respuesta.json({ mensaje: "eliminar,listo", data: null });
  }
}
export default new ProductosController();

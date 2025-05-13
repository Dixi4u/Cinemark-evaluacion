const  clientesController = {};
import clientesModel from "../models/Clientes.js"

clientesController.getClientes = async (req, res) => {
   const clientes = await clientesModel.find()
   res.json(clientes)
}

clientesController.insertClientes = async (req, res) => {
    const { nombre, correo, contrasena, telefono, direccion, activo } = req.body;
    const newCliente = new clientesModel({ nombre, correo, contrasena, telefono, direccion, activo })
    await newCliente.save()
    res.json({message: "Cliente" + nombre + "guardado"})
}

clientesController.deleteClientes = async (req, res) => {
    await clientesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Borrado exitosamente"})
}

clientesController.updateClientes = async (req, res) => {
    const { nombre, correo, contrasena, telefono, direccion, activo } = req.body;
    const updateCliente = await clientesModel.findByIdAndUpdate(req.params.id,
        {nombre, correo, contrasena, telefono, direccion, activo}, {new: true}
    )
    res.json({message: "Empleado actualizado exitosamente"})
}

export default clientesController;
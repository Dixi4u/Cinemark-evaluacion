const  empleadosController = {};
import empleadosModel from "../models/Empleados.js"

empleadosController.getEmpleados = async (req, res) => {
   const empleados = await empleadosModel.find()
   res.json(empleados)
}

empleadosController.insertEmpleados = async (req, res) => {
    const { nombre, correo, contrasena, telefono, direccion, puesto, fecha_contratacion, salario, activo} = req.body;
    const newEmpleado = new empleadosModel({ nombre, correo, contrasena, telefono, direccion, puesto, fecha_contratacion, salario, activo })
    await newEmpleado.save()
    res.json({message: "Empleado" + nombre + "guardado"})
}

empleadosController.deleteEmpleados = async (req, res) => {
    await empleadosModel.findByIdAndDelete(req.params.id)
    res.json({message: "Borrado exitosamente"})
}

empleadosController.updateEmpleados = async (req, res) => {
    const { nombre, correo, contrasena, telefono, direccion, puesto, fecha_contratacion, salario, activo } = req.body;
    const updateEmpleado = await empleadosModel.findByIdAndUpdate(req.params.id,
        {nombre, correo, contrasena, telefono, direccion, puesto, fecha_contratacion, salario, activo}, {new: true}
    )
    res.json({message: "Empleado actualizado exitosamente"})
}

export default empleadosController;
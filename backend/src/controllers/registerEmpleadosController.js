import empleadoModel from "../models/Empleados.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerEmpleadoController = {};

registerEmpleadoController.register = async (req, res) => {
  const { nombre, correo, contrasena, telefono, direccion, puesto, fecha_contratacion, salario, activo  } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existingempleado = await empleadoModel.findOne({ correo });
    if (existingempleado) {
      return res.json({ message: "Empleado ya existe" });
    }

    //Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(contrasena, 10);

    //Guardamos el empleado nuevo
    const newEmpleado = new empleadoModel({ nombre, correo, contrasena: passwordHash, telefono, direccion, puesto, fecha_contratacion, salario, activo });

    await newEmpleado.save()

    //--> Token <--
    jsonwebtoken.sign(
        //1-Que voy a guardar
        {id: newEmpleado._id},
        //2-Secreto
        config.JWT.secret,
        //3-Cuando expira
        {expiresIn: config.JWT.expiresIn},
        //4-Funcion flecha
        (error, token)=>{
            if(error) console.log(error);
            res.cookie("authToken", token);
            res.json({message: "se inserto esta babosada"});
        }
    )


  } catch (error) {
    console.log(error)
  }
};

export default registerEmpleadoController
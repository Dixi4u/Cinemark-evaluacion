import {Schema, model} from "mongoose";

const empleadosSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    contrasena: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true,
    },
    puesto: {
        type: String,
        require: true
    },
    fecha_contratacion: {
        type: Date,
        require: true
    },
    salario: {
        type: Number,
        require: true
    },
    activo: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("empleados", empleadosSchema)
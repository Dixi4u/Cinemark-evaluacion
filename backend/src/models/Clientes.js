import {Schema, model} from "mongoose";

const clientesSchema = new Schema({
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
    activo: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("clientes", clientesSchema)
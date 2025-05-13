//importar la librera mongoose
import mongoose, { connect } from "mongoose";
import{config} from "./src/config.js";



//conecto la base de datos
mongoose.connect(config.db.URI);


//Creo una constante 
const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("BD is connected")
});

connection.once("disconnected", () =>{
    console.log("BD is disconnected")
});

connection.once("error", (error) =>{
    console.log("error" + error)
});
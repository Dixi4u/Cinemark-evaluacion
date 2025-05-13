import peliculasController from "../controllers/peliculasController.js"
import express from "express"
import multer from "multer"

const router = express.Router()

//Configurar una carpeta local que guarde las imagenes
const upload = multer({dest: "public/"})

router.route("/")
.get(peliculasController.getAllPeliculas)
.post(upload.single("imagen"), peliculasController.createPelicula)

router.route("/:id")
.put(upload.single("imagen"), peliculasController.updatePelicula)
.delete(peliculasController.deletePelicula)

export default router
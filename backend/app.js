import express from "express"
import cookieParser from "cookie-parser"

//Import routes
import peliculasRoute from "./src/routes/peliculas.js";
import empleadosRoute from "./src/routes/empleados.js";
import registerEmpleadosRoute from "./src/routes/registerEmpleados.js";
import clientesRoutes from "./src/routes/clientes.js";
import registerClienteRoute from "./src/routes/registerCliente.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";


const app = express();
app.use(express.json());
app.use(cookieParser())

//api
app.use("/api/peliculas", peliculasRoute);
app.use("/api/empleados", empleadosRoute);
app.use("/api/registerEmpleados", registerEmpleadosRoute);
app.use("/api/clientes", clientesRoutes);
app.use("/api/registerCliente", registerClienteRoute);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/passwordRecovery", passwordRecoveryRoutes)



export default app;
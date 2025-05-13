import app from "./app.js";

import "./database.js";

import "./src/config.js";

import {config} from "./src/config.js"

async function main() {
    app.listen(config.server.port);
    console.log("Me prendio el servidor" + config.server.port);
}

main();

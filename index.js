//const chalk = require("chalk");
import Reserva from "./modelo/reserva.js";

console.log(JSON.parse(JSON.stringify(new Reserva("1", "-1", "Frio", "Pablo", "asd"))));
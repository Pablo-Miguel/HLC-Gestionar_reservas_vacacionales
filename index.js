//const chalk = require("chalk");
const Reserva = require("./modelo/reserva");

console.log(JSON.parse(JSON.stringify(new Reserva("1", "-1", "Frio", "Pablo", "asd"))));
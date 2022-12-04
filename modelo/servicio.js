//const fs = require("file-system");
import Reserva from "./modelo/reserva.js";

export default class Servicio{

    constructor(){
        this._listaReservas = [
            new Reserva("36.6864500", "-6.1360600", "Lluvioso", "Pablo", new Date("2022-12-05")),
            new Reserva("36.6864500", "-6.1360600", "Lluvioso", "Marta", new Date("2022-12-05")),
            new Reserva("36.6864500", "-6.1360600", "Soleado", "Manu", new Date("2022-12-06")),
            new Reserva("36.6864500", "-6.1360600", "Muy caluroso", "Carlos", new Date("2022-12-07"))
        ];
    }

}
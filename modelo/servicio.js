const fs = require("fs");
const Reserva = require("./reserva");

module.exports =  class Servicio{

    constructor(){
        this._listaReservas = [];
        const jsonList = fs.readFileSync("./reservas.json");
        if(JSON.parse(jsonList).length != 0){
            JSON.parse(jsonList).forEach(element => {
                this._listaReservas.push(new Reserva(element._id_reserva, element._latitud, element._longitud, element._clima, element._nombre, new Date(element._fecha_reserva.split("T")[0])));
            });
        }
    }

    getListaReservas(){
        return [...this._listaReservas];
    }

    anadirReserva(latitud, longitud, clima, nombre, fecha_reserva){
        const lenIni = this._listaReservas.length;
        this._listaReservas.push(new Reserva(null, latitud, longitud, clima, nombre, new Date(fecha_reserva)));
        fs.writeFileSync('./reservas.json', JSON.stringify([...this._listaReservas]));
        return this._listaReservas.length - lenIni;
    }

    borrarReserva(id){
        const lenIni = this._listaReservas.length;
        this._listaReservas = this._listaReservas.filter(x => x.getIdReserva() != id);
        fs.writeFileSync('./reservas.json', JSON.stringify([...this._listaReservas]));
        return lenIni - this._listaReservas.length;
    }

}
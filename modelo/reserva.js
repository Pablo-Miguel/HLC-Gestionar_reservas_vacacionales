const { v4: uuidv4 } = require('uuid');

module.exports = class Reserva{

    constructor(id_reserva, latitud, longitud, clima, temperatura, humedad, nombre, fecha_reserva){
        if(id_reserva == null){
            this._id_reserva = uuidv4();
        } else {
            this._id_reserva = id_reserva;
        }
        this._latitud = latitud;
        this._longitud = longitud;
        this._clima = clima;
        this._temperatura = temperatura;
        this._humedad = humedad;
        this._nombre = nombre;
        this._fecha_reserva = fecha_reserva;
    }

    getIdReserva(){
        return this._id_reserva;
    }

    getLatitud(){
        return this._latitud;
    }

    setLatitud(value){
        this._latitud = value;
    }

    getLongitud(){
        return this._longitud;
    }

    setLongitud(value){
        this._longitud = value;
    }

    getClima(){
        return this._clima;
    }

    setClima(value){
        this._clima = value;
    }

    getTemperatura(){
        return this._temperatura;
    }

    setTemperatura(value){
        this._temperatura = value;
    }

    getHumedad(){
        return this._humedad;
    }

    setHumedad(value){
        this._humedad = value;
    }

    getNombre(){
        return this._nombre;
    }

    setNombre(value){
        this._nombre = value;
    }

    getFechaReserva(){
        return this._fecha_reserva;
    }

    setFechaReserva(value){
        this._fecha_reserva = value;
    }

    toString(){
        return "Reserva -> " + this._id_reserva + ":\n   - Latitud: " + this._latitud + "\n   - longitud: " + this._longitud + "\n   - clima: " + this._clima + "\n   - temperatura: " + this._temperatura + "\n   - humedad: " + this._humedad + "\n   - nombre: " + this._nombre + "\n   - fecha_reserva: " + this._fecha_reserva.toLocaleDateString();
    }

}
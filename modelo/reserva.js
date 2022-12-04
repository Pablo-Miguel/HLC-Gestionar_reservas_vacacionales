import { v4 as uuidv4 } from 'uuid';

export default class Reserva{

    constructor(latitud, longitud, clima, nombre, fecha_reserva){
        this._id_reserva = uuidv4();
        this._latitud = latitud;
        this._longitud = longitud;
        this._clima = clima;
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

}
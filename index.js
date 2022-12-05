const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const request = require("postman-request");
const Servicio = require("./modelo/servicio");

const LOCALIDAD = "Jerez de la frontera"
const servicio = new Servicio();
const jsonList = fs.readFileSync("./claves_APIs.json");
const keyOpenWeatherMap = JSON.parse(jsonList).OpenWeatherMap;
const keyWeatherStack = JSON.parse(jsonList).WeatherStack;

function diffDays(date1, date2){

    var difference_In_Time = date2.getTime() - date1.getTime();

    return Math.round(difference_In_Time / (1000 * 3600 * 24));
}

yargs.command({
    command: 'addReserva',
    describe: 'Crea una nueva reserva con el tiempo que va a hacer',
    builder: {
        nombre: {
            describe: 'Nombre de la reserva a crear',
            demandOption: true,  // Required
            type: 'string'     
        },
        fechaInicio: {  
            describe: 'Fecha de inicio de la reserva en formato [YY-mm-dd]',
            demandOption: true,
            type: 'string'
        }
    },
    
    handler(argv) {

        let latitud;
        let longitud;
        let temperatura;
        let humedad;
        let descripcionClima;

        request("http://api.openweathermap.org/geo/1.0/direct?q=" + LOCALIDAD + "&limit=1&appid=" + keyOpenWeatherMap, null,(error, response, body) => {
            if(response.statusCode == 200){
                latitud = JSON.parse(body)[0].lat;
                longitud = JSON.parse(body)[0].lon;
            } else {
                console.log("ERROR LOCALIZADOR: " + error);
            }
        });
        
        setTimeout(() => {
            request("http://api.weatherstack.com/current?access_key=" + keyWeatherStack + "&query=" + latitud + "," + longitud + "&forecast_days=" + diffDays(new Date(Date.now()), new Date(argv.fechaInicio)) + "&units=m", null,(error, response, body) => {
                if(response.statusCode == 200){
                    temperatura = JSON.parse(body).current.temperature;
                    humedad = JSON.parse(body).current.humidity;
                    descripcionClima = JSON.parse(body).current.weather_descriptions[0];
                } else {
                    console.log("ERROR LOCALIZADOR: " + error);
                }
            })
        }
        , 1000);
        
        setTimeout( () => {
            if(servicio.anadirReserva(latitud, longitud, descripcionClima, temperatura, humedad, argv.nombre, new Date(argv.fechaInicio)) == 1)
                console.log(chalk.green.bold("Se ha añadido la reserva correctamente"));
            else
                console.log(chalk.green.bold("Se ha producido un error al añadir la reserva"));
        }
        , 2000);
    }
})

yargs.command({
    command: 'listaReserva',
    describe: 'Muestra una lista de las reservas con sus IDs',
    builder: {
    },
  
    handler(argv) {
        console.log("\n" + chalk.white.bgMagenta.bold("    LISTA RESERVAS    ") + "\n");
        servicio.getListaReservas().forEach((element, index) => {
            console.log(element.toString(index));
        });
    }
})

yargs.command({
    command: 'borraReserva',
    describe: 'Borra una reserva',
    builder: {
        id: {
            describe: 'Id de la reserva a borrar',
            demandOption: true,  // Required
            type: 'string'     
        }
    },
    
    handler(argv) {
        if(servicio.borrarReserva(argv.id) == 1)
            console.log(chalk.red.bold("Se ha borrado la reserva correctamente con id: ") + argv.id);
        else
            console.log(chalk.red.bold("Se ha producido un error al borrar la reserva con id: ") + argv.id);
    }
})
   
yargs.parse();
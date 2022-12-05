const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const Servicio = require("./modelo/servicio");

const servicio = new Servicio();
const jsonList = fs.readFileSync("./claves_APIs.json");
const keyOpenWeatherMap = JSON.parse(jsonList).OpenWeatherMap;
const keyWeatherStack = JSON.parse(jsonList).WeatherStack;


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
        if(servicio.anadirReserva(latitud, longitud, clima, argv.nombre, new Date(argv.fechaInicio)) == 1)
            console.log(chalk.green.bold("Se ha añadido la reserva correctamente"));
        else
            console.log(chalk.green.bold("Se ha producido un error al añadir la reserva"));
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
const yargs = require("yargs");



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
        let nombreReserva = argv.nombre;
        let dateReserva = new Date(argv.fechaInicio);
        console.log("NOMBRE: " + nombreReserva);
        console.log("FECHA RESERVA: " + dateReserva);
    }
})

yargs.command({
    command: 'listaReserva',
    describe: 'Muestra una lista de las reservas con sus IDs',
    builder: {
    },
  
    handler(argv) {
        console.log("Result: MOSTRAR_LISTA")
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
        let idReserva = argv.id;
        console.log("ID_RESERVA: " + idReserva);
    }
})
   
yargs.parse();
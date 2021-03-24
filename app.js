const argv = require('./config/yargs').argv
const colors = require('colors');
const { resultado, listarTable } = require('./multiplicar/multiplicacion');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTable(argv.base, argv.limite)
        break;
    case 'crear':
        resultado(argv.base, argv.limite).then((result) => {
            console.log(`EL achivo creado:`, colors.green(result))
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('Comando Mal');
        break;
}
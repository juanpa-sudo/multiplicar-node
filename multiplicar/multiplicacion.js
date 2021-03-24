const fs = require('fs')
const colors = require('colors');

let listarTable = (base, limite = 10) => {
    console.log(`==========`.green);
    console.log(`Table ddel ${base}`.green);
    console.log(`==========`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i}=${base*i}`);
    }
}

let resultado = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El dato ingresado ${base} no es un numero`)
            return
        }
        let dato = ''
        for (let i = 1; i <= limite; i++) {
            dato += (`${base} x ${i} = ${base * (i)}\n`)

        }

        fs.writeFile(`tabla/tabla-${base}.txt`, dato, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`)
        });
    });
}

module.exports = {
    resultado,
    listarTable
}
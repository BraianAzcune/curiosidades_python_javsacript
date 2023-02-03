/***
 * Completamente vanilla NODEJS, 
 * 
 * Dado el path de un archivo de codigo, busca en cada linea del codigo nombre de funciones, y la guarda en un 
 * archivo nuevo de salida.
 * 
 * El codigo es capaz de soportar archivos realmente grandes, ya que va tomando de a trozos.
 * El problema esta en que si una funcion su nombre es multilinea no aparecia.
 * 
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("path file=", (message) => {
  if (!fs.existsSync(message)) {
    console.error("no existe el path");
    return;
  }
  if (!fs.lstatSync(message).isFile()) {
    console.error("el path debe ser hacia un archivo");
    return;
  }
  const rta = main(message);
  rta.then(guardar);
  rl.close();
});

function findFunctionsNameInLine(line) {
  const findFunctions = /function (\w+)/gm;
  const matches = [...line.matchAll(findFunctions)];
  const arrayFunctionName = Array.from(matches, m => m[1]);
  return arrayFunctionName;
}

function guardar(arrayFunctionsName) {
  arrayFunctionsName.sort();
  fs.writeFileSync(path.resolve(__dirname, `functionsName${new Date().toISOString().slice(0, 19).replaceAll(":", "-")}.no_git`), JSON.stringify(arrayFunctionsName));
}

function main(path_file) {

  const rlFile = readline.createInterface({
    input: fs.createReadStream(path_file),
    crlfDelay: Infinity
  });
  const arrayFunctionsName = [];
  rlFile.on("line", (line) => {
    const arrayFunctionName = findFunctionsNameInLine(line);
    arrayFunctionsName.push(...arrayFunctionName);
  });
  return new Promise(resolve => {
    rlFile.on("close", () => {
      resolve(arrayFunctionsName);
    });
  });
}



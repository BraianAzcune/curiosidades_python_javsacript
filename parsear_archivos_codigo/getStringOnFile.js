/**
 * Similar a la explicacion del codigo de getNombreFunciones
 * Hace lo mismo pero busca todo el texto que este entre comillas dobles.
 * Y tiene el mismo defecto, de que si es multilinea estaria cortado.
 * 
 * en este caso, a diferencia del otro script se tiene la funcion preguntar, que encapcula todo el proceso que se realiza en el otro lado.
 */
const readline = require("readline");
const fs = require("fs");
const path = require("path");

async function preguntar(texto = "pregunta generica?=") {
  return new Promise((resolve) => {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(texto, (message) => {
      rl.close();
      resolve(message);
    });
  });
}


function findTextBetweenQuotes(line) {
  const regexFindTextBetweenQuotes = /"([^"]*)"/g;
  const matches = [...line.matchAll(regexFindTextBetweenQuotes)];
  const arrayFunctionName = Array.from(matches, m => m[1]);
  return arrayFunctionName;
}

function guardar(arrayFunctionsName) {
  arrayFunctionsName.sort();
  fs.writeFileSync(path.resolve(__dirname, `PRUEBA${new Date().toISOString().slice(0, 19).replaceAll(":", "-")}.no_git`), JSON.stringify(arrayFunctionsName));
}

function procesoBuscarYGenarar(path_file) {

  const rlFile = readline.createInterface({
    input: fs.createReadStream(path_file),
    crlfDelay: Infinity
  });
  const arrayFunctionsName = [];
  rlFile.on("line", (line) => {
    const arrayFunctionName = findTextBetweenQuotes(line);
    arrayFunctionsName.push(...arrayFunctionName);
  });
  return new Promise(resolve => {
    rlFile.on("close", () => {
      resolve(arrayFunctionsName);
    });
  });
}


async function main() {
  const pathString = await preguntar("Ingrese el path del archivo a procesar=");
  if (!fs.existsSync(pathString)) {
    console.error("no existe el path");
    return;
  }
  if (!fs.lstatSync(pathString).isFile()) {
    console.error("el path debe ser hacia un archivo");
    return;
  }
  const rta = await procesoBuscarYGenarar(pathString);
  guardar(rta);
}
main();
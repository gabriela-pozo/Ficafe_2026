// Genera index.html a partir de src/template.html y los datos en data/.
// Uso: node build.js
const fs = require("fs");
const path = require("path");

const raiz = __dirname;
const leer = (...p) => fs.readFileSync(path.join(raiz, ...p), "utf8");
// Escapa "</" para que los datos incrustados no cierren la etiqueta <script>.
const json = (txt) => JSON.stringify(JSON.parse(txt.replace(/⁠/g, ""))).replace(/<\//g, "<\\/");

const plantilla = leer("src", "template.html");
const pagina = plantilla
  .replace("__DATA__", () => json(leer("data", "ediciones.json")))
  .replace("__LOTES__", () => json(leer("data", "lotes_taza.json")));

// La plantilla empieza con elementos de <head> y sigue con <header>: se separan para un documento completo.
const corte = pagina.indexOf("<header");
if (corte < 0) throw new Error("No se encontró <header> en la plantilla");
const html =
  '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' +
  pagina.slice(0, corte) +
  "</head>\n<body>\n" +
  pagina.slice(corte) +
  "\n</body>\n</html>\n";

fs.writeFileSync(path.join(raiz, "index.html"), html);
console.log("index.html generado (" + Math.round(html.length / 1024) + " KB)");

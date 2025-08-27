import fs from "fs";
import csv from "csv-parser";

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

let elementsCache = [];


//Cargar Data
function loadCSV() {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream("data/tabla_periodica.csv")
      .pipe(csv())
      .on("data", (row) => results.push(row))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
}

// Al iniciar la app, cargar datos una vez
(async () => {
  elementsCache = await loadCSV();
  console.log("CSV cargado en memoria con", elementsCache.length, "elementos");
})();


//Obtener todos los elementos químicos
export const getAllElements = async (req, res) => {
  return res.status(200).json(elementsCache);
};

//Obtener elemento por su simbolo ej He,O, Fe
export const getElementBySymbol = async (req, res) => {
  const elements = await loadCSV();
  let { symbol } = req.params;
  symbol = capitalize(symbol);
  
  const element = elementsCache.filter((element) => element.Symbol === symbol);

  if (element.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontró ningún registro con ese símbolo" });
  }

  return res.status(200).json(element);
};

//Obtener elemento su número atómico
const getElementByAtomicNumber = async (req, res) => {
  let { number } = req.params;

  //Verifica que el usuario solo ingrese números
  if (isNaN(number)) {
    return res.status(400).json({ error: "El parámetro debe ser un número" });
  }

  const element = elementsCache.filter((element) => element.AtomicNumber === number);

  if (element.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontró ningún registro con ese número" });
  }

  return res.status(200).json(element);
}

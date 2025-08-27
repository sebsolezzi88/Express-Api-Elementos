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
export const getElementByAtomicNumber = async (req, res) => {
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

//Obtener elementos por su fase
export const getElementsByPhse = async (req, res) => {
  let { phase } = req.params;
  phase = capitalize(phase);
  const valitPhase = ["Solid", "Liquid", "Gas"];

  //Verificar que sea una fase valida
  if (!valitPhase.includes(phase)) {
    return res
      .status(400)
      .json({ error: "Solo se admite Solid, Liquid y Gas" });
  }

  
  const elementsFiltered = elements.filter((element) => element.Phase === phase);

  if (elementsFiltered.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontró ningún elemento con esa fase" });
  }

  return res.status(200).json(elementsFiltered);
}

//Obtener elementos por su tipo
export const getElementsByType = async (req, res) => {
  let { type } = req.params;
  type = capitalize(type);
  const valitType = ["Metal", "Nonmetal", "Metalloid"];

  //Verficar que sea un tipo valido
  if (!valitType.includes(type)) {
    return res
      .status(400)
      .json({ error: "Solo se admite Metal, Nonmetal y Metalloid" });
  }

  const elementsFiltered = elements.filter((element) => element.Type === type);
  if (elementsFiltered.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontró ningún registro con ese tipo" });
  }
  return res.status(200).json(elementsFiltered);
}

//Obtener elementos por su grupo
export const getElementsByGroup = async (req, res) => {
  let { group } = req.params;

  //Diccionario de converción
  const groupMap = {
    "nonmetal": "Nonmetal",
    "noble-gas": "Noble Gas",
    "alkali-metal": "Alkali Metal",
    "alkaline-earth-metal": "Alkaline Earth Metal",
    "metalloid": "Metalloid",
    "halogen": "Halogen",
    "other-metal": "Other Metal",
    "transition-metal": "Transition Metal",
    "lanthanide": "Lanthanide",
    "actinide": "Actinide"
  };

   group = group.toLowerCase();

  // Validar si existe en el diccionario
  if (!groupMap[group]) {
    return res.status(400).json({
      error:
        "Solo se admite: nonmetal, noble-gas, alkali-metal, alkaline-earth-metal, metalloid, halogen, other-metal, transition-metal, lanthanide, actinide"
    });
  }

  const elementsFiltered = elementsCache.filter(
    (element) => element.GroupClassification === groupMap[group]
  );

  if (elementsFiltered.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontró ningún registro con ese grupo" });
  }
  return res.status(200).json(elementsFiltered);
}

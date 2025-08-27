import fs from "fs";
import csv from "csv-parser";

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

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

import express from 'express';
import routes from './appRouter.js';
import path from 'path'
import { fileURLToPath } from 'url';

const app  = express();

//Ruta para archivos estaticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs"); //Motor de plantillas
//Importando las rutas
app.use('/',routes);

app.listen(3000,(req,res)=>{
    console.log("Server corriendo en el puerto 3000");
});
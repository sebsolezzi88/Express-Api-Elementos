import expres from 'express';
import routes from './appRouter.js';

const app  = expres();

//Importando las rutas
app.use('/',routes);

app.listen(3000,(req,res)=>{
    console.log("Server corriendo en el puerto 3000");
});
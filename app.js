import expres from 'express';


const app  = expres();

app.listen(3000,(req,res)=>{
    console.log("Server corriendo en el puerto 3000");
});
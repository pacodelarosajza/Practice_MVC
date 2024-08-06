import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import { testClientes } from './backend/controllers/clientes.controller.js';
import { testEmpleados } from './backend/controllers/empleados.controller.js';
import { testGuitarras } from './backend/controllers/flores.controller.js';
import { testPagos } from './backend/controllers/pagos.controller.js';

dotenv.config();
mongoose.connect(process.env.url) //conecta la base de datos con mongo
.then (()=> {
    console.log(" ME VOY A CASAR CON NICOLE")
})
.catch((error)=>{
    console.log ("ME CASO CON BARBARA")
})
const app =express(); // crea el servidor
app.use (cors());

app.listen(4005,()=>{ // escucha al servidor 
    console.log ('SAQUEN LAS ICNOTIC')
})

testClientes()
testEmpleados()
testFlores()
testPagos()

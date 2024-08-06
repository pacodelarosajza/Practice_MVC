import { ModeloPagos } from "../models/pagos.model.js";

export const testPagos = () =>{
    console.log('funciona el controlador de pagos')
}

ModeloPagos.create({
    precio: 70000,
    fechaLLegada: "13 de marzo"

const express= require('express')

const api= express.Router();
/* ESTE METODO ME PERMITE CONFIGURAR LAS RUTAS */
const productoControl=require('../control/RegistroControl')
/*IMPORTAMOS O REQUERIMOS EL CONTROL*/

api.post('/crear',productoControl.crearRegistro)
/* creaos la ruta de creacion*/
api.get('/mostrar',productoControl.obtenerRegistro);
/*creamos la ruta de creacion*/

api.put('/actualizar/:id',productoControl.actualizarProducto)

api.delete('/eliminar/:id',productoControl.eliminarRegistro)
/* creamos borrar*/
module.exports= api;
/* EXPORTAMOS LAS RUTAS PARA QUE PUEDAN SER UTLIZADAS EN NUESTRO

*/


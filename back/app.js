const express= require('express');

/* REQUERIMOS EXPRESS*/


const app= express();
/* CONVERTIMOS EXPRESS EN UN OBJETO*/


const productoRutas=require('./rutas/productosRutas');
/* REQUERIMOS EL MODILO RUTAS */
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    /* Voy a tener acceso, control, seguimiento y origen de todos los datos que van a ingresar a la API */
   
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Request-Method');
    /* Acceso a todos los metadatos- cookies */
   
    res.header('Access-Control-Allow-Request-Method', 'GET,POST,PUT,DELETE,OPTIONS');
    /* Acceso a todos los metodos http- metodos de peticio */
   
    res.header('Allow', 'GET,POST,PUT,DELETE,OPTIONS');
   /* Confirmacion estricta de los metodos a utilizar */
   
   next();
   })
   

/* MIDDLEWARE 
Logica de intercambio de infromacion entre app*/
app.use(express.json());
app.use('/api',productoRutas);
/* CREAMOS LA RUTA PARA ACCEDER A NUESTRA API */

module.exports= app;
/* EXPORTAMOS EL MODULO CON  LA LOGICA DE EXPRESS */



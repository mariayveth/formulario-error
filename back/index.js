const mongoose= require('mongoose')
/* REQUERIMOS LA LIBRERIA EN NUESTRO PROYECTO */
const app=require('./app')


mongoose.connect('mongodb://localhost:27017/MercadoBIT1',{useNewUrlParser:true,

useUnifiedTopology:true},(error,res)=>{
       
if (error) {

    console.log("Error al conectarnos con la BD")

} else {
    app.listen(3407,()=>{
        console.log("ESTAMOS CONECTADOS EN EL PUERTO 3000")
    })

}
})
/* connect: es el metodo de mongoose el nos permitira conectarnos a nuestra base de datos y esta resive estos para metros.
 string o ruta de conexion
 mongodb: Es el motor de BD
 Local Host: Es EL Servidor
 puerto 27017
 BD a la que nos vamos a conectar y vamos el CRUD
 useNewUrlParser: es una analizadora de cadenas el cual le debemos  especificar
 el puerto donde escuchara mongoDB

 usefiedtopology: Escucha la solicitud -request y lo monitores.Nos ppermite la admnistracion del controlador de MongoDB

 (error,res))=>{} Funcion que no permite validar si la conexion fue exitosa */



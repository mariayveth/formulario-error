const registro=require('../modelos/productos')

function crearRegistro(req,res){
    var Registro= new registro();
    
     var parametros= req.body;

     

     Registro.nombre=parametros.nombre;
     Registro.marca=parametros.marca;
     Registro.precio=parametros.registro;
     Registro.unidades=parametros.unidades;
     

     

     Registro.save((err,RegistroNuevo)=>{
       if (err){
           res.status(500).send( {message:"ERROR EN EL SERVIDOR"});
       }else{
           if(!RegistroNuevo){
               res.status(200).send({message:"NO FUE POSIBLE REALIZAR REGISTRO"})
           }
           else{
               res.status(200).send({
                   status: 'Registro creado',
                   producto:RegistroNuevo
               })
           }
       }
     }
    
     )   
}
function obtenerRegistro(req,res){
    registro.find((err,RegistroEncontrados)=>{
        
        if (err){
            res.status(500).send( {message:"ERROR EN EL SERVIDOR"});
        }else{
            if(!RegistroEncontrados){
                res.status(200).send({message:"NO FUE POSIBLE REALIZAR REGISTRO"})
            }
            else{
                res.status(200).send({
                    status: 'Registro encontados',
                     productos: RegistroEncontrados
    
                })
            }
        }
      }
     
        
    )

    

}   

function actualizarProducto(req,res){

    var productoid= req.params.id;
    
    var nuevoDatosRegistro= req.body;
    
    registro.findByIdAndUpdate(productoid,nuevoDatosRegistro,(err,RegistroActualizado)=>{
        if (err){
            res.status(500).send( {message:"ERROR EN EL SERVIDOR"});
        }else{
            if(!RegistroActualizado){
                res.status(200).send({message:"No fue posible actualizat"})
            }
            else{
                res.status(200).send({
                    status: 'Registro actualizados correctamente',
                     producto: nuevoDatosRegistro
    })
        
            }}})

    

}   

     
   function eliminarRegistro(req,res){
       var Registroid=req.params.id;
       

       registro.findByIdAndDelete(Registro,(err,RegistroEliminado)=>{
        if (err){
            res.status(500).send( {message:"ERROR ELIMINAR"});
        }else{
            if(!RegistroEliminado){
                res.status(200).send({message:"No fue posible ELIMINAR"})
            }
            else{
                res.status(200).send({
                    status: 'Registro ELIMINADO  correctamente',
                     producto: RegistroEliminado
    })      
        
            }}})

    

}   





    
    
    

 module.exports={
    crearRegistro,
    obtenerRegistro,
    actualizarProducto,
    eliminarRegistro

}

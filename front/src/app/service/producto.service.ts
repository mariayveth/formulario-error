import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable} from 'rxjs';

@Injectable()
  export class ProductoService{
   apiUrl='http://localhost:3407/api'
    
   /* Creamos una variable que va a tener la ruta de nuestra  api*/
    constructor(private http:HttpClient){}
    
    crearRegistro(productoNuevo){

      const params=JSON.stringify(productoNuevo);
      /* creamos la constacia quien recibe los dsstos en forma de js y los conviertes en un JSON */
      const options= {headers:new HttpHeaders({'Content-type':'application/json'})};
      /* Creamos sun constante la cual nos para indicar que los que envira al tipo de json */
    
       return this.http.post(
       this.apiUrl +'/crear',
       params,
       options
       ).pipe(res=>res) /* el metodo pipe convierte datos de entrada ( lo que se ingreso formulario) en datos de salida para que llegue a nuestra API forma de repuestas y nos trae la respuesta de nuestra API*/
    }   

     obtenerProducto(){
       return this.http.get(
         this.apiUrl+'mostrar'/* le indicamos la ruta donde
         */ 
        
        ).pipe(res=>res);
     }



  }


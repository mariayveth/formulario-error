import { Component, OnInit } from '@angular/core';
import {producto} from '../../models/producto';

import {ProductoService} from '../../service/producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
   public Producto: producto; /* instacnia el model*/
   public productosEncontrados: any=[];

  constructor(private service: ProductoService) { 
    this.Producto=new producto();
  }/* Requerimos el servivio*/




  ngOnInit(): void {
    /* se llama al iniciar angular, es una tarea de inicilizacion adicional.Se carga los metodos y funciones que queremos que cargu
    e la vista sin neceisdad de un evento.(click)*/
    this.mostrarProducto()
  }
  formularioup(){
    this.service.crearRegistro(this.Producto).subscribe((res:any)=>{

      if(res.stausCode !==200){
        alert("error al crear el producto");
      }else{
        alert("Producto creado correctamente")
      }
    })

   

   

  }
  mostrarProducto(){
    /* nos subribimos al servivio que creamos , y le indicamos que nos devuelva una repuesta cualquer segun sea el caso*/
    this.service.obtenerProducto().subscribe((response:any)=>{
    this.productosEncontrados= response.producto;
    },
    (error)=>{

      var errormensaje= <any>error;/* El error se guarda dentrode una variable para luego ser compara y mostrar*/
      if(errormensaje != null){

        console.log(error)
      }
    
    })
    

  }
}

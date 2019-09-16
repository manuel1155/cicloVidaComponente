import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  nombre:string;
  descripcion:string;
  activo:boolean;
  imagen1:string;
  imagen2:string;
  cantidad:number;
  otros:any;
  url:string;
  displayImagen:string;

  constructor() {
    
    this.nombre="Mango";
    this.descripcion="El mango es una fruta cítrica que crece en la Zona Intertropical y es de pulpa carnosa y dulce.";
    this.activo=true;
    this.imagen1='https://www.pnglot.com/pngfile/detail/180-1805316_mango-png-image-free-download-imagenes-de-mango.png';
    this.imagen2='https://www.searchpng.com/wp-content/uploads/2019/02/Mango-transparent-PNG-1024x1024.png';
    this.cantidad=15;
    this.url='https://es.wikipedia.org/wiki/Mango_(fruta)';
    this.otros=['Vitamina C','Vitamina E','Vitamina K','Calcio','Hierro','Magnesio'];
    this.displayImagen=this.imagen1;
   }

   changeImagen(){
     if(this.displayImagen==this.imagen1){
      this.displayImagen=this.imagen2
     }else{
      this.displayImagen=this.imagen1
     }
   }

  ngOnInit() {
  }

}

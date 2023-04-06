import { Component, } from '@angular/core';

@Component({
  selector: 'app-tresuare-finder',
  templateUrl: './tresuare-finder.component.html',
  styleUrls: ['./tresuare-finder.component.scss']
})
export class TresuareFinderComponent {
  
  filas: any;
  columns: any;
  tabla: boolean;
  imageSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  Treasure: any[];
  contador: any;

  constructor(){
    this.filas;
    this.columns;
    this.tabla = false;
    this.imageSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.Treasure = [];
    this.contador= 0;
  }

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columns});
    this.imageSrc = [];
    this.Treasure [0] = this.getRandom(this.filas);
    this.Treasure [1]  = this.getRandom(this.columns);

    for(let i=0; i<this.filas; i++) {
      this.imageSrc[i] = [];
      for(let j=0; j<this.columns; j++) {
        this.imageSrc[i][j] = "./assets/x.png";
      }
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }
  
  voltearImagen(fila: number, columna: number) {
    this.contador ++;
    if (this.imageSrc[fila][columna] === "./assets/skull.png") {
      this.imageSrc[fila][columna] = "./assets/x.png";
    } else {
      this.imageSrc[fila][columna] = "./assets/skull.png";
    } 

    if (this.Treasure[0] == fila && this.Treasure[1] == columna){
      this.imageSrc[fila][columna] = "./assets/chest.png";
      alert ("Odio mi vida");
    }
     
  }

}
  

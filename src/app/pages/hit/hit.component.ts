import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.scss'],
})
export class HitComponent implements OnInit {
  diglet: boolean = false;
  timer: any;
  contador: number = 30;
  fils: number[] = [1, 1, 1,];
  columns: number[] = [1, 1, 1];
  imgDiglet: string = './assets/mole.png';
  imgBg: string = './assets/bg.jpg';
  object: any[] = [];
  imageSrc: string[][] =[];
  puntos: number = 0;
 
  constructor(){}

 ngOnInit(): void {

this.default();
 }
 
  starting() {  
    this.contador = 30;
    this.puntos = 0;
    this.timer = setInterval(() => {
      let contadorP = 2;
      
      let prueba = setInterval(() => {
        this.default();
        contadorP  --;
        
        this.object[0] = this.getRandom(3);
        this.object[1] = this.getRandom(3);
        this.imageSrc[this.object[0]][this.object[1]] = this.imgDiglet;
        
        if(contadorP<=0) {
          clearInterval(prueba)
        }
      },500)
      
      if (this.contador <= 1) {
        clearInterval(this.timer);
        
        
      }
      this.contador--;
    },1000);
  }

  sumar(f: number, c: number){
    if(this.imageSrc[f][c] === this.imgDiglet){
      this.imageSrc[f][c] = this.imgBg;
      this.puntos++;
    }
  }

  default() {
    for (let i = 0; i<this.fils.length; i++) {
      this.imageSrc[i] =[];
      for (let j = 0; j < this.columns.length; j++) {
        this.imageSrc[i][j] = this.imgBg
      }
  }
  }

  getRandom(num: number) {
   return Math.floor(Math.random()*num)
  }
}

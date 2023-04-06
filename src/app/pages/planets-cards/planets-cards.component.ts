import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-cards',
  templateUrl: './planets-cards.component.html',
  styleUrls: ['./planets-cards.component.scss'],
})
export class PlanetsCardsComponent {
  
  cardArray = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/earth.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 2,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 3,
      name: 'mars',
      img: 'assets/mars.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 4,
      name: 'mercury',
      img: 'assets/mercury.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 5,
      name: 'saturn',
      img: 'assets/saturn.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 6,
      name: 'uranus',
      img: 'assets/uranus.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 7,
      name: 'earth',
      img: 'assets/earth.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 8,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 9,
      name: 'mars',
      img: 'assets/mars.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 10,
      name: 'mercury',
      img: 'assets/mercury.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 11,
      name: 'saturn',
      img: 'assets/saturn.svg',
      isFlipped: false,
      isMached: false,
    },
    {
      id: 12,
      name: 'uranus',
      img: 'assets/uranus.svg',
      isFlipped: false,
      isMached: false,
    },
  ];

  
  constructor() {
    this.sort()
  }

 

  flipCard(card: any) {
    card.isFlipped = true;
    if (this.flippedCard().length === 2) {
      const [card1, card2] = this.flippedCard();
    if (card1.name === card2.name) {
      card1.isMached = true;
      card2.isMached = true;
      card1.img = './assets/tick.svg';
      card2.img = './assets/tick.svg';
    } else {
      setTimeout(() => {
        card1.isFlipped = false;
        card2.isFlipped = false;
      }, 200);
    }
    if (card.isMached || card.isFlipped || this.flippedCard().length >= 2) {
      return
    } 
  }
  }
  flippedCard() {
    return this.cardArray.filter((card) => 
      card.isFlipped && !card.isMached
    );
  }

  sort() {
    for (let i = this.cardArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cardArray[i], this.cardArray[j]] = [this.cardArray[j], this.cardArray[i]];
    }
  }

  reset(){
    this.cardArray.forEach((card) => {
      card.isFlipped = false;
      card.isMached = false;
      card.img = `/assets/${card.name}.svg`
    });
    this.sort()
  }
 
}
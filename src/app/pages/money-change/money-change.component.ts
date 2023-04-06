import { Component, OnInit } from '@angular/core';
import { MoneyService } from 'src/app/shared/money.service';


@Component({
  selector: 'app-money-change',
  templateUrl: './money-change.component.html',
  styleUrls: ['./money-change.component.scss']
})

export class MoneyChangeComponent implements OnInit {

exchange: any=[];
change: any = null;  
currency: any =[];
selectExchange = 'EUR';

constructor(private requiredservice: MoneyService){}

ngOnInit(): void {
  this.requiredservice.getMoney().subscribe((res: any)=>{
this.currency = res;
for (const key in res.rates) {
  this.exchange.push({name: key, value: res.rates[key]});
}
  }); 
}

selectChange(event:any): void {
  const base = (event.target as HTMLSelectElement).value
  this.requiredservice.selectMoney(base).subscribe((res: any)=>{
    this.exchange = [];
    for (const key in res.rates){
      this.exchange.push({name: key, value: res.rates[key]});

    }

  })
}
}
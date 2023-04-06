import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http: HttpClient) { }

  getMoney(){

    return this.http.get("https://api.vatcomply.com/rates")
  }

  selectMoney(base: any){
    return this.http.get(`https://api.vatcomply.com/rates?base=${base}`)
  }
}

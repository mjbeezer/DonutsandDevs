import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut, Donuts } from './donuts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  apiUrl:string = 'https://grandcircusco.github.io/demo-apis/donuts.json'
  apiDonutId:string = 'https://grandcircusco.github.io/demo-apis/donuts/';

  constructor(private http:HttpClient) { }

  getAllDonuts():any {
    return this.http.get(this.apiUrl);
  }

  getDonutById(id:number):Observable<Donut>{
    return this.http.get<Donut>(this.apiDonutId + id + ".json");
  }
  
}
  


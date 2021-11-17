import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

  apiUrl:string = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json'

  constructor(private http:HttpClient) { }

  getAllPeople():any {
    return this.http.get(this.apiUrl);
  }
}

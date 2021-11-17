import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Donuts, Result } from '../donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donutList:Result[] = [];

  constructor(private donut_Service:DonutsService) { }

  ngOnInit(): void {

    this.donut_Service.getAllDonuts().subscribe((response:Donuts) => {
      this.donutList = response.results;
      console.log(this.donutList);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Donuts } from '../donuts';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donuts-detail',
  templateUrl: './donuts-detail.component.html',
  styleUrls: ['./donuts-detail.component.css']
})
export class DonutsDetailComponent implements OnInit {

  donut:Donut = {} as Donut;

  constructor(private route:ActivatedRoute, private donut_Service:DonutsService) { }

  ngOnInit(): void {

    

    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    this.donut_Service.getDonutById(id).subscribe((response:Donut) => {
      this.donut = response;
    })
  }

}

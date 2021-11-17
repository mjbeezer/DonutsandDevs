import { Component, OnInit } from '@angular/core';
import { Complete, People } from '../people';
import { ScienceService } from '../science.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  devList:Complete[] = []

  constructor(private people_Service:ScienceService) { }

  ngOnInit(): void {

    this.people_Service.getAllPeople().subscribe((response:People) => {
      this.devList = response.complete;
      console.log(this.devList)
    })

  }

}

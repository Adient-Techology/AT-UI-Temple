import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {

  data:string;

  constructor() { }

  ngOnInit(): void {

    this.data="india is great";
  }

}

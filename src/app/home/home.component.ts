import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images:any= ["picture1","picture2","picture3"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

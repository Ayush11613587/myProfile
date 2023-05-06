import { Component, OnInit } from '@angular/core';
import {default as data} from '../../assets/database/db.json';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor() { 
  }

  images:any = data.images;
  videos :any = data.videos;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { default as data } from '../../assets/database/db.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  pentiahInNewsImages:any = data.pentiahInNews;
  pics:any = data.images;
  performance:any = data.performanceHome;

  constructor() {}
 
  ngOnInit(): void {
    let items = document.querySelectorAll('.nbs-flexisel .flexisel-item');
    items.forEach((el) => {
      var minPerSlide = 5;
      if(this.detectMob()){
        minPerSlide = 1;
      }
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.childNodes[0]);
        next = next.nextElementSibling;
      }
    });
  }

   detectMob() {
    const toMatch = [
        /Android/i,
        /iPhone/i,
        /webOS/i,
        /iPad/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

}


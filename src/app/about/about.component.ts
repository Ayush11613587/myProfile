import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  images = [
    {random: 'Proin enim enim, cursus a aliquet ac, eleifend placerat odio. Ut vitae sem metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu vulputate erat, at consequat odio. Morbi molestie mi tempus, mollis lacus in, tincidunt tortor. Suspendisse dignissim mollis sodales. Mauris iaculis hendrerit feugiat. Curabitur nunc est, pellentesque at luctus et, faucibus vitae risus.', picture: 'https://picsum.photos/id/944/900/500'},
    {random: 'Proin enim enim, cursus a aliquet ac, eleifend placerat odio. Ut vitae sem metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu vulputate erat, at consequat odio. Morbi molestie mi tempus, mollis lacus in, tincidunt tortor. Suspendisse dignissim mollis sodales. Mauris iaculis hendrerit feugiat. Curabitur nunc est, pellentesque at luctus et, faucibus vitae risus.', picture: 'https://picsum.photos/id/944/900/500'},
    {random: 'Proin enim enim, cursus a aliquet ac, eleifend placerat odio. Ut vitae sem metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu vulputate erat, at consequat odio. Morbi molestie mi tempus, mollis lacus in, tincidunt tortor. Suspendisse dignissim mollis sodales. Mauris iaculis hendrerit feugiat. Curabitur nunc est, pellentesque at luctus et, faucibus vitae risus.', picture: 'https://picsum.photos/id/944/900/500'},
    {random: 'Proin enim enim, cursus a aliquet ac, eleifend placerat odio. Ut vitae sem metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu vulputate erat, at consequat odio. Morbi molestie mi tempus, mollis lacus in, tincidunt tortor. Suspendisse dignissim mollis sodales. Mauris iaculis hendrerit feugiat. Curabitur nunc est, pellentesque at luctus et, faucibus vitae risus.', picture: 'https://picsum.photos/id/944/900/500'}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

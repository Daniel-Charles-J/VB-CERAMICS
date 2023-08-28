import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{
  
  isChildRoute = false;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}
  public childActive : any;

  ngOnInit() {
    //this.router.navigate(['library'])
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.childActive = !!this.route.firstChild;
    //   console.log(this.childActive);
    // });
  }

  library = [
    {
      img1: './assets/images/article1.jpeg',
      content: 'Quartz - Interesting Facts',
      library_id:1,
    },
    {
      img1: './assets/images/article2.jpeg',
      content: 'Quartz - Interesting Facts',
      library_id:2,
    },
    {
      img1: './assets/images/article3.jpeg',
      content: 'Quartz - Interesting Facts',
      library_id:3,
    },
    {
      img1: './assets/images/article4.jpeg',
      content: 'Quartz - Interesting Facts',
      library_id:4,
    },

  ];
}

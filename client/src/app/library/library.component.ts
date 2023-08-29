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
      topic:'Raw Material',
      library_id:1,
    },
    {
      img1: './assets/images/article2.jpeg',
      topic:'Raw Material',
      content: 'Agate and It’s Importance ',
      library_id:2,
    },
    {
      img1: './assets/images/article3.jpeg',
      topic:'Raw Material',
      content: "Graphite's Impact in Industries",
      library_id:3,
    },
    {
      img1: './assets/images/article4.jpeg',
      topic:'Thermal Testing ',
      content: 'Thermal Dynamics with Precision (Dilatometer)',
      library_id:4,
    },
    {
      img1: './assets/images/article5.jpeg',
      topic:'Material Preparation',
      content: 'Glove Boxes for Scientific Advancement',
      library_id:5,
    },
    {
      img1: './assets/images/article6.jpeg',
      topic:'Heat treatment facility',
      content: 'Working Principle of Hot Air Oven',
      library_id:6,
    },
   
  ];
}

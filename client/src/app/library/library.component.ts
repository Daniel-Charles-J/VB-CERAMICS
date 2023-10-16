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
  currentImageIndex15 = 0;
  imagesNav=[
    './assets/images/menu_own.svg',
    './assets/images/icons8-close.svg',
  ]
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
  
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
  ourGroups(param : any){
    if(param == 'vbcc'){
      window.location.href = 'https://www.vbceramics.com/home.php'
    } else {
      window.location.href = 'https://www.hitechceramics.in/'
    }
  }

  socials(param : any){
    if(param == 'youtube'){
      window.location.href = 'https://www.youtube.com/@drviswabaskaranvbceramics4394'
    } else if (param == 'linkedIn'){
      window.location.href = 'https://www.linkedin.com/company/dr.vb-ceramics-research-centre/'
    } else {
      window.location.href = 'paste a facebook URL here';
    }
  }

  library = [
    {
      img1: './assets/images/article1.jpeg',
      content: 'Quartz - Interesting Facts',
      topic:'Raw Material',
      library_id:1,
      routing : "quartz-interesting-facts"
    },
    {
      img1: './assets/images/article2.jpeg',
      topic:'Raw Material',
      content: 'Agate and It’s Importance',
      library_id:2,
      routing : "agate-importance"
    },
    {
      img1: './assets/images/article3.jpeg',
      topic:'Raw Material',
      content: "Graphite’s Impact in Industries",
      library_id:3,
      routing : 'graphite-impact-in-industries'
    },
    {
      img1: './assets/images/article4.jpeg',
      topic:'Thermal Testing ',
      content: 'Thermal Dynamics with Precision (Dilatometer)',
      library_id:4,
      routing : "thermal-dynamic-with-precision"
    },
    {
      img1: '../../assets/gloveBox.png',
      topic:'Material Preparation',
      content: 'Glove Boxes for Scientific Advancement',
      library_id:5,
      routing : 'glove-boxes-for-scientific-advancement'
    },
    {
      img1: './assets/images/article6.jpeg',
      topic:'Heat treatment facility',
      content: 'Working Principle of Hot Air Oven',
      library_id:6,
      routing : "working-principle-of-hot-air-oven"
    },
   
  ];
}

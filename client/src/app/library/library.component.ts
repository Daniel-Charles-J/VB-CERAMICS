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
      library_id: 1,
      name: 'Max'
    },
    {
      library_id: 2,
      name: 'Anna'
    },
    {
      library_id: 3,
      name: 'Chris'
    },
    {
      library_id: 4,
      name: 'Chris'
    },
    {
      library_id: 5,
      name: 'Chris'
    },
  ];
}

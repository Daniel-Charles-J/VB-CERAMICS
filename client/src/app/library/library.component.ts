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

    const fullUrl = this.location.path();
     
    this.router.navigate(['library'])
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.childActive = !!this.route.firstChild;
      console.log(this.childActive);
    });
      //this.router.navigate(['library']),
    //  const segments = fullUrl.split("/"); // Split the URL by "/"
    //  const id = segments[segments.length - 1]; // Get the last segment
    //  console.log(id)
    //  if(id =="3"){
    
    //  }

    //  const fullUrl1 = window.location.href;
    // console.log(fullUrl1);
     
    //console.log("method triggered");
     //this.childActive = false;
     
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

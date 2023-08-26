import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{
  isChildRoute = false;
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log("method triggered");

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.isChildRoute = !!this.route.firstChild;
    // });
  }

  childActive = false;
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
    {
      library_id: 6,
      name: 'Chris'
    }
  ];
  

  showChild() {
    this.childActive = true;

    // this.library_id = e;
    // console.log(this.library_id);
  }


  libraryPage(){
  console.log("event triggered");
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.isChildRoute = !!this.route.firstChild;
  });

}
}

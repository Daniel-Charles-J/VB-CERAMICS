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


  libraryPage(){
  console.log("event triggered");
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.isChildRoute = !!this.route.firstChild;
  });

}
}

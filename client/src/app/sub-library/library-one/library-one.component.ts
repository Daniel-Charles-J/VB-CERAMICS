import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-library-one',
  templateUrl: './library-one.component.html',
  styleUrls: ['./library-one.component.css']
})
export class LibraryOneComponent {

  ngOnInit(): void {
    console.log("sub triggered");
  }
}

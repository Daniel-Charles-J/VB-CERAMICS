import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(){
  }
  box_2_content : string[] = ['Home','About Us','Services','Gallery','Contact Us'];
  box_3_content : string[] = ['Raw Materials','Material Processing','Characterization','Heat Treatment Facility']
  box_4_content : string[] = ['Contact Us','Help centre']
}

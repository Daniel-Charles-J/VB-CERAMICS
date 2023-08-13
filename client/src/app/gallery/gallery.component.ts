import { Component, HostListener, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(){
  }
  isLoaded: boolean = true;
  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    this.updateSlidesToShow(window.innerWidth);
  }
  box_2_content : string[] = ['Home','About Us','Services','Gallery','Contact Us'];
  box_3_content : string[] = ['Raw Materials','Material Processing','Characterization','Heat Treatment Facility']
  box_4_content : string[] = ['Contact Us','Help centre'];

  public customOptions1: OwlOptions = {
    items: 1.2,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause:true,
  };
  public customOptions1_left: OwlOptions = {
    items: 1.2,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause:true,
    rtl: true,
  };
  public customOptions: OwlOptions = {
    items: 4.5,
    loop:true,
    autoplay:true,
    autoplayTimeout: 400,
    dots: false,
    autoplayHoverPause:true,
    margin: 20
  };

  public customOptions_left: OwlOptions = {
    items:4.5,
    loop:true,
    rtl: true,
    autoplay:true,
    autoplayTimeout: 400,
    dots: false,
    autoplayHoverPause:true,
    margin: 20
  };

  updateSlidesToShow(width: number) {
    // this.isLoaded=false;
    if (width < 700) {
      this.customOptions1.items = 1;
    } else {
      this.customOptions1.items = 1.2;
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes)
  // }
}

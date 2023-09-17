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
  
  box_2_content : string[] = ['Home','About Us','Services','Gallery','Contact Us'];
  box_3_content : string[] = ['Raw Materials','Material Processing','Characterization','Heat Treatment Facility']
  box_4_content : string[] = ['Contact Us','Help centre'];

  public customOptions_main: OwlOptions = {
    items: 1.1,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 3000,
    dots: false,
    autoplayHoverPause:true,
    responsive: {
      0:{
        items: 1
      },
      750:{
        items: 1.1
      }
    }
  };

  public customOptions1: OwlOptions = {
    items: 1.1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause:true,
  };
  public customOptions1_left: OwlOptions = {
    items: 1.1,
    loop:true,
    autoplay:true,
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
    margin: 20,
    responsive: {
      0:{
        items: 2.2
      },
      400:{
        items: 2.2
      },
      600: {
        items: 3.1
      },
      800:{
        items: 3.5
      },
      1200:{
        items: 4.5
      }
    }
  };

  public customOptions_left: OwlOptions = {
    items: 4.5,
    loop:true,
    rtl: true,
    autoplay:true,
    autoplayTimeout: 400,
    dots: false,
    autoplayHoverPause:true,
    margin: 20,
    responsive: {
      0:{
        items: 2
      },
      400:{
        items: 2.2
      },
      600: {
        items: 3.1
      },
      800:{
        items: 3.5
      },
      1000:{
        items: 4.5
      }
    }
  };
}

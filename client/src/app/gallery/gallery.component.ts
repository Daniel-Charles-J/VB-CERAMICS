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
  showMenu1: boolean = false;
  box_2_content : string[] = ['Home','About Us','Services','Gallery','Contact Us'];
  box_3_content : string[] = ['Raw Materials','Material Processing','Characterization','Heat Treatment Facility']
  box_4_content : string[] = ['Contact Us','Help centre'];

  public customOptions_main: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 4000,
    dots: false,
    autoplayHoverPause:true,
  };

  public customOptions1: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: false,
    autoplayHoverPause:true,
  };
  public customOptions1_left: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: false,
    autoplayHoverPause:true,
    rtl: true,
  };
  public customOptions: OwlOptions = {
    items: 5,
    loop:true,
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
        items: 2
      },
      600: {
        items: 3
      },
      800:{
        items: 3
      },
      1000:{
        items: 4
      },
      1200:{
        items: 5
      },
    
    }
  };

  public customOptions_left: OwlOptions = {
    items: 5,
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
        items: 2
      },
      600: {
        items: 3
      },
      800:{
        items: 3
      },
      1000:{
        items: 4
      },
      1200:{
        items: 5
      }
    }
  };

  toggleMenu(): void {
    let menuBtn =
      document.querySelector(".menu-btn");
    if (!this.showMenu1) { 
      menuBtn.classList.add("close");
      // Reset the menu state
      this.showMenu1 = true;
    } else {
      menuBtn.classList.remove("close");
      // Reset the menu state
      this.showMenu1 = false;
    }
  }
}

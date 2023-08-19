import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList,HostListener} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from "aos";
import { trigger, transition, style, animate } from '@angular/animations';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
  
})

export class HomeComponent implements AfterViewInit {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};
public customOptions: OwlOptions = {
  items:7,
  loop:true,
  autoplay:true,
  autoplayTimeout:1000,
  dots: false,
  autoplayHoverPause:false,
};

public customOptions2: OwlOptions = {
  items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:1000,
  dots: false,
  autoplayHoverPause:true,
  nav: true,
  navText: ["<img src='./assets/images/arrow_cc.svg'>","<img src='./assets/images/arrow_c.svg'>"],
  };

  ngOnInit(): void
  {
  AOS.init({
    debounceDelay: 500, // the delay on debounce used while resizing window (advanced)
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
  
  });
  }
  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;
  isVisible = false;

  ngAfterViewInit() {
    this.boxElements.forEach((boxElement) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            boxElement.nativeElement.style.animation = 'none'; // Disable the animation
            void boxElement.nativeElement.offsetWidth; // Trigger a reflow
            boxElement.nativeElement.style.animation = null; // Re-enable the animation
          }
        });
      });
      observer.observe(boxElement.nativeElement);
    });
    
  }
  @HostListener('window:scroll', ['$event'])
  onViewportScroll(event: any): void {
    // Handle scrolling logic here if needed
  }
  currentImageIndex = 0;
  currentImageIndex2 = 0;
  currentImageIndex3 = 0;
  currentImageIndex4 = 0;
  currentImageIndex5 = 0;
  currentImageIndex6 = 0;
  images = [
    './assets/images/double arrow_.svg',
    './assets/images/double_arrow.svg',
  ];

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  changeImage2() {
    this.currentImageIndex2 = (this.currentImageIndex2 + 1) % this.images.length;
  }
  changeImage3() {
    this.currentImageIndex3 = (this.currentImageIndex3 + 1) % this.images.length;
  }
  changeImage4() {
    this.currentImageIndex4 = (this.currentImageIndex4 + 1) % this.images.length;
  }
  changeImage5() {
    this.currentImageIndex5 = (this.currentImageIndex5 + 1) % this.images.length;
  }
  changeImage6() {
    this.currentImageIndex6 = (this.currentImageIndex6 + 1) % this.images.length;
  }
  
}

import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList,HostListener} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from "aos";
import { trigger, transition, style, animate } from '@angular/animations';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
  
})

export class HomeComponent  {
  screenHeight: number;
  screenWidth: number;
    constructor() {
      this.getScreenSize();
  }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          // console.log(this.screenHeight, this.screenWidth);
    }
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
  responsive: {
    0:{
      items: 1
    },
    480:{
      items: 2
    },
    650:{
      items: 3
    },
    850:{
      items: 4
    },
    1000:{
      items: 5
    },
    1250:{
      items: 7
    }
}
};

public customOptions2: OwlOptions = {
  items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:2500,
  dots: false,
  // margin:0,
  autoplayHoverPause:true,
  nav: true,
  // stagePadding: 0,
  navText: ["<img src='./assets/images/arrow_cc.svg'>","<img src='./assets/images/arrow_c.svg'>"],

  responsive: {
    0:{
      items: 1
    },
    600:{
      items: 2
    },
    1050:{
      items: 3
    },
}
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


  @HostListener('window:scroll', ['$event'])
  onViewportScroll(event: any): void {
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
  })
}
  currentImageIndex = 0;
  currentImageIndex2 = 0;
  currentImageIndex3 = 0;
  currentImageIndex4 = 0;
  currentImageIndex5 = 0;
  currentImageIndex6 = 0;
  currentImageIndex9 = 0;
  currentImageIndex10 = 0;
  currentImageIndex11 = 0;
  currentImageIndex12 = 0;
  currentImageIndex13 = 0;
  currentImageIndex14 = 0;
  currentImageIndex15 = 0;
  images = [
    './assets/images/double arrow_.svg',
    './assets/images/double_arrow.svg',
  ];
  imagesNav=[
    './assets/images/menu_own.svg',
    './assets/images/icons8-close.svg',
  ]
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
  changeImage9() {
    this.currentImageIndex9 = (this.currentImageIndex9 + 1) % this.images.length;
  }
  changeImage10() {
    this.currentImageIndex10 = (this.currentImageIndex10 + 1) % this.images.length;
  }
  changeImage11() {
    this.currentImageIndex11 = (this.currentImageIndex11 + 1) % this.images.length;
  }
  changeImage12() {
    this.currentImageIndex12 = (this.currentImageIndex12 + 1) % this.images.length;
  }
  changeImage13() {
    this.currentImageIndex13 = (this.currentImageIndex13 + 1) % this.images.length;
  }
  changeImage14() {
    this.currentImageIndex14 = (this.currentImageIndex14 + 1) % this.images.length;
  }
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }


  arrowimages = [
    './assets/images/arrow_cc.svg',
    './assets/images/Vectorb.svg',
  ];

  currentImageIndex7 = 0;
  changeImage7() {
    this.currentImageIndex7 = (this.currentImageIndex7 + 1) % this.arrowimages.length;
  }
  changeImage7b() {
    this.currentImageIndex7 = (this.currentImageIndex7 - 1) % this.arrowimages.length;
  }

  ourGroups(param : any){
    if(param == 'vbcc'){
      window.location.href = 'https://www.vbceramics.com/home.php'
    } else {
      window.location.href = 'https://www.hitechceramics.in/'
    }
  }

  socials(param : any){
    if(param == 'youtube'){
      window.location.href = 'https://www.youtube.com/@drviswabaskaranvbceramics4394'
    } else if (param == 'linkedIn'){
      window.location.href = 'https://www.linkedin.com/company/dr.vb-ceramics-research-centre/'
    } else {
      window.location.href = 'paste a facebook URL here';
    }
  }

  arrowimages2 = [
    './assets/images/arrow_c.svg',
    './assets/images/Vectorbr.svg',
  ];

  currentImageIndex8 = 0;
  changeImage8() {
    this.currentImageIndex8 = (this.currentImageIndex8 + 1) % this.arrowimages2.length;
  }
  changeImage8b() {
    this.currentImageIndex8 = (this.currentImageIndex8 -1) % this.arrowimages2.length;
  }
}

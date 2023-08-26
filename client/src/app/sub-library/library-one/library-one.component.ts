import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-library-one',
  templateUrl: './library-one.component.html',
  styleUrls: ['./library-one.component.css']
})

export class LibraryOneComponent {
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  id : any;
  heading : any
  image : any
  subHeading : any
  description : any


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['libraryOne']
    const filteredData = this.content.filter((x)=>x.id == this.id);
    this.heading = filteredData[0].heading;
    this.image = filteredData[0].img;
    this.subHeading = filteredData[0].subHeading;
    this.description = filteredData[0].description;
  }

  content = [
    {
      id : 1,
      heading: 'Thermal Dynamics with Precision (Dilatometer)',
      img: 'Dany',
      subHeading : 'Dilatometer : Thermal Dynamics with Exquisite Precision',
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
    {
      id : 2,
      heading: "Glove Boxes for Scientific Advancement",
      img: 'Datchu',
      subHeading : 'Dilatometer : Thermal Dynamics with Exquisite Precision',
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
    {
      id : 3,
      heading: 'Working Principle of Hot Air Oven',
      img: 'Faith',
      subHeading : 'Dilatometer : Thermal Dynamics with Exquisite Precision',
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
    {
      id : 4,
      heading: "Graphite's Impact in Industries",
      img: 'Abinesh',
      subHeading : 'Dilatometer : Thermal Dynamics with Exquisite Precision',
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
    {
      id : 5,
      heading: "Quartz - Interesting Facts",
      img: 'Tun Tun',
      subHeading : 'Dilatometer : Thermal Dynamics with Exquisite Precision',
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
  ];
}

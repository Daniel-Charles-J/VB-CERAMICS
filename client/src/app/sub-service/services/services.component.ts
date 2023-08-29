import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  id : any;
  image_1 : any;
  image_2 : any;
  header : any;
  heading : any;
  title : any;
  title_heading : any;
  students : any;
  industries : any;
  lists : any = [];
  description : any;


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['service-id'];
    const filteredData = this.content.filter((x)=>x.id == this.id);
    this.image_1 = filteredData[0].image_1;
    this.image_2 = filteredData[0].image_2;
    this.header = filteredData[0].header;
    this.heading = filteredData[0].heading;
    this.title = filteredData[0].title;
    this.title_heading = filteredData[0].title_heading;
    this.students = filteredData[0].students;
    this.industries = filteredData[0].industries;
    this.lists = filteredData[0].lists;
    this.description = filteredData[0].description;
  }

  content = [
    {
      id : 1,
      image_1 : '../../../assets/service13-sec-1.png',
      image_2 : '../../../assets/service13-sec-2.jpg',
      header : 'Heat treatment facility',
      heading: 'Cold / Fired (MOR) Modulus of Rupture(max 3 samples), Flexural Strength',
      title : 'Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.',
      title_heading : '₹ - Enquire for Estimate',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      lists : ['List1','List2','List3','List4','List5'],
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },

    {
      id : 2,
      image_1 : 'IMAGE-1',
      image_2 : 'IMAGE-2',
      header : 'Physical properties',
      heading: 'Thermal Expansion (Dilatometer up to 1000°C)',
      title : "A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.",
      title_heading : '₹ - Enquire for Estimate',
      students : '₹1800 - Students',
      industries : '₹9000 - Industries',
      lists : ['ListA','ListB','ListC','ListD','ListE'],
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
    {
      id : 3,
      image_1 : 'IMAGE-1',
      image_2 : 'IMAGE-2',
      header : 'Physical properties',
      heading: 'Hot Modulus Of Rupture (HMOR)',
      title : "It is the material's ability to resist deformation under load with Constant Temperature.",
      title_heading : '₹ - Enquire for Estimate',
      students : '₹2200 - Students',
      industries : '₹1200 - Industries',
      lists : ['ListE','ListF','ListG','ListH','ListJ'],
      description : "Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
    },
  ]
}

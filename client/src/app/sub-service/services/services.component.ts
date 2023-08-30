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
  top_para: any;
  bottom_para: any;
  table1_th: any;
  table1_th2: any;
  table1_td: any;
  table1_td2: any;
  table2_th: any;
  table2_th2: any;
  table2_td: any;
  table2_td2: any;


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
    this.top_para = filteredData[0].top_para;
    this.bottom_para = filteredData[0].bottom_para
    this.table1_th = filteredData[0].table1_th;
    this.table1_th2 = filteredData[0].table1_th2;
    this.table1_td = filteredData[0].table1_td;
    this.table1_td2 = filteredData[0].table1_td2;
    this.table2_th = filteredData[0].table2_th;
    this.table2_th2 = filteredData[0].table2_th2;
    this.table2_td = filteredData[0].table2_td;
    this.table2_td2 = filteredData[0].table2_td2;
  }

  content = [
    {
      id : 1,
      image_1 : '../../../assets/service13-sec-1.png',
      image_2 : '../../../assets/service13-sec-2.jpg',
      header : 'Heat treatment facility',
      heading: 'Box Furnace - up to 1400°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      top_para : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.',
      bottom_para : 'This Furnaces are operated under normal atmosphere are used to subject oxides and clay materials for heat treatment , Sintering etc. ,Its operating features are : ',
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1400°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      title : 'Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.',
      title_heading : '₹ - Enquire for Estimate',
      lists : ['Working Temperature up to RT to 1400°C', 'Tailor made box size as per the customer requirement', 'Silicon carbide heating elements from USA', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],
      
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

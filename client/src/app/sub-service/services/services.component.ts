import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  headingParams : any;
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
  para1: any;
  para2:any;
  para3: any;
  para4: any;

  ngOnInit(): void {
    this.headingParams = this.activatedRoute.snapshot.params['heading'];
    console.log(this.headingParams);
    const filteredData = this.content.filter((x)=>x.heading == this.headingParams);
    this.image_1 = filteredData[0].image_1;
    this.image_2 = filteredData[0].image_2;
    this.header = filteredData[0].header;
    this.heading = filteredData[0].heading;
    this.title = filteredData[0].title;
    this.students = filteredData[0].students;
    this.industries = filteredData[0].industries;
    this.lists = filteredData[0].lists;
    this.description = filteredData[0].description;
    // this.top_para = filteredData[0].top_para;
    // this.bottom_para = filteredData[0].bottom_para
    this.table1_th = filteredData[0].table1_th;
    this.table1_th2 = filteredData[0].table1_th2;
    this.table1_td = filteredData[0].table1_td;
    this.table1_td2 = filteredData[0].table1_td2;
    this.table2_th = filteredData[0].table2_th;
    this.table2_th2 = filteredData[0].table2_th2;
    this.table2_td = filteredData[0].table2_td;
    this.table2_td2 = filteredData[0].table2_td2;
    this.para1 = filteredData[0].para1;
    this.para2 = filteredData[0].para2;
    this.para3 = filteredData[0].para3;
    this.para4 = filteredData[0].para4;
  }

  content = [
    {
      id : 1,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service1-sec-1.png',
      image_2 : '../../../assets/service1-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'X-Ray Diffraction (XRD)',
      description : "It is a non-destructive method for analysing matters ranging from liquids to crystals.",
      students : '₹750 - Students',
      industries : '₹1500 - Industries',
      para1 : "X-ray diffraction (XRD) is a non-destructive method for analysing matters ranging from liquids to crystals. This characterization method provides statistical information on interlayer multiple orientations of carbon nanomaterials. The parameters examined by this technique are structural strain, diameter, chirality distribution, and impurities in CNMs. Bragg's law is applied for the X-ray diffraction pattern peak. X-ray diffraction profile does not differentiate microstructures but used for determining the sample purity. X-rays are impinged on the NPs which rotate in the collimated beam. The graphite oxidation process is determined by intercalation of oxygen species between interlayers. Moreover, growth of MWCNTs and bundle numbers in SWCNTs can also be monitored by using XRD.",
      para2 : "X-Ray diffraction Analysis is one of the most important methods required by all material scientists as it enables to study several features of materials such as phase identification, phase purity, crystal structure, lattice parameters, crystallinity and the percentage of phase composition.",
    },
    {
      id : 2,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service2-sec-1.png',
      image_2 : '../../../assets/service2-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'X-Ray Fluorescence (XRF)',
      description : 'It is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by being bombarded with high-energy X-rays or gamma rays.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "XRF (X-ray fluorescence) is a non-destructive analytical technique used to determine the elemental composition of materials. XRF analysers determine the chemistry of a sample by measuring the fluorescent (or secondary) X-ray emitted from a sample when it is excited by a primary X-ray source.",
      para2 : "The phenomenon is widely used for elemental analysis and chemical analysis, particularly in the investigation of metals, glass, ceramics and building materials, and for research in geochemistry, forensic science, archaeology and art objects such as paintings.",
      para3 : "The Key Principles of XRF : The technique used by XRF spectrometers is possible because of the behaviour of the atoms when they interact with radiation. If material is excited via high-energy, short-wavelength radiation it may become ionized. If the energy is high enough it will have the capacity to dislodge an inner electron that has been tightly held. After this, the atom becomes unstable causing an outer electron to take the place of the missing inner electron, releasing energy.",
      para4 : "There are many techniques of sample preparation for analysis by an XRF spectrometer, including:",
      lists : ['Liquids', 'Solid', 'sample preparation Powders', 'Fused beads', 'Pellets']
    },
    {
      id : 3,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service3-sec-1.png',
      image_2 : '../../../assets/service3-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image.',
      students : '₹1000 - Students',
      industries : '₹2000 - Industries',
      para1 : "The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.",
      para2 : "A beam of electrons is produced at the top of the microscope by an electron gun. The electron beam follows a vertical path through the microscope, which is held within a vacuum. The beam travels through electromagnetic fields and lenses, which focus the beam down toward the sample. Once the beam hits the sample, electrons and X-rays are ejected from the sample.",
    },
    {
      id : 4,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service4-sec-1.png',
      image_2 : '../../../assets/service4-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM- Gold Sputtering)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The process is done once it’s coated with ultra-thin electrically-conducting metal.',
      students : '₹1250 - Students',
      industries : '₹2500 - Industries',
      para1 : "The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.",
      para2 : "A beam of electrons is produced at the top of the microscope by an electron gun. The electron beam follows a vertical path through the microscope, which is held within a vacuum. The beam travels through electromagnetic fields and lenses, which focus the beam down toward the sample. Once the beam hits the sample, electrons and X-rays are ejected from the sample.",
      para3 : "Sputter coating for SEM is the process of applying an ultra-thin coating of electrically-conducting metal – such as gold (Au).",
    },
    {
      id : 5,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service5-sec-1.png',
      image_2 : '../../../assets/service5-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Laser Particle Size Analyzer (PSA)',
      description : 'It is used to measure the sizes of particles in a material. Particle size is calculated by measuring the angle of light scattered by the particles as they pass through a laser beam.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "Laser diffraction measures particle size distributions by measuring the angular variation in intensity of light scattered as a laser beam passes through a dispersed particulate sample. Large particles scatter light at small angles relative to the laser beam and small particles scatter light at large angles.",
      para2 : " It works on the principle that when a beam of light (a laser) is scattered by a group of particles, the angle of light scattering is inversely proportional to particle size (ie. the smaller the particle size, the larger the angle of light scattering).",
      para3 : "Typically, Laser Diffraction analysers cover a particle size range of 10 nm to 4 mm. This corresponds to a factor of 400,000 between the smallest and the largest measurable particles. In most applications, Laser Diffraction is typically used for particle size distributions between 30 nm – 1 mm.",
    },
    {
      id : 6,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service6-sec-1.png',
      image_2 : '../../../assets/service6-sec-2.png',
      header : 'Thermal testing',
      heading: 'Thermal Expansion (Dilatometer up to 1000°C)',
      description : 'A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "Dilatometer, a thermo analytical instrument which is used to measure the thermal expansion or contraction of a given sample under specific controlled temperature-time program is available . The thermal expansion and contraction are measured digitally with the high-resolution (1-micrometer) linear variable differential transformer (LVDT) measuring system. Then the measurements are made employing an LVDT connected through a proper cable to Computer .Using Labview software Online Graph is plotted between Temperature Vs % of Total Expansion.",
      para2 : "Dilatometry is used to test a wide range of materials such as traditional and advanced ceramics, glasses, metals, and polymers.",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1400°C',
      table1_td : 'Sample Size',
      table1_td2 : 'OD or Width: 5 to 10mm, Length: 25 to 50mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Thermal Expansion (Dilatometer up to 1000°C)',
      table2_td2 : 'Sample Size: , Width:5-10mm, Length: 25-50 mm',
    },
    {
      id : 7,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service7-sec-1.png',
      image_2 : '../../../assets/service7-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'BET Analysis',
      description : 'It is a physical characterization technique that provides quantitative data on the specific surface area and porosity distribution of solid materials.',
      students : '₹2500 - Students',
      industries : '₹4000 - Industries',
      para1 : "Brunauer-Emmett-Teller (BET) analysis is a physical characterization technique that provides quantitative data on the specific surface area and porosity distribution of solid materials. The method is suitable for a wide range of solid matrices from catalyst powders to monolithic materials.",
      para2 : "Analysing BET Data : The amount of gas adsorbed depends on the exposed surface are but also on the temperature, gas pressure and strength of interaction between the gas and solid. In BET surface area analysis, nitrogen is usually used because of its availability in high purity and its strong interaction with most solids.",
    },
    {
      id : 8,
      title : 'Sophisticated Instruments',
      image_1 : '../../../assets/service8-sec-1.png',
      image_2 : '../../../assets/service8-sec-2.gif',
      header : 'Sophisticated Instruments',
      heading: 'Pin On Disc Tribometer (Wear)',
      description : 'It is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.',
      students : '₹1000 - Students',
      industries : '₹1500 - Industries',
      para1 : "The pin-on-disc wear test is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.",
      para2 : " The ball, or pin on disk, wear testing machine presses stationary pin or ball against the rotating disk. Measure coefficient of friction (COF), friction force, wear rate, wear volume, temperature, and several other tribology parameters.",
      para3 : "he pin on disk tribometer wear testing machine setup is ideal for characterizing tribology properties of alloys, ceramics, polymers, metals, coatings, and solid lubricants.",
    },
    {
      id : 13,
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service13-sec-1.png',
      image_2 : '../../../assets/service13-sec-2.jpg',
      header : 'Heat treatment facility',
      heading: 'Box Furnace - up to 1400°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      para1 : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.',
      para2 : 'This Furnaces are operated under normal atmosphere are used to subject oxides and clay materials for heat treatment , Sintering etc. ,Its operating features are : ',
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1400°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT to 1400°C', 'Tailor made box size as per the customer requirement', 'Silicon carbide heating elements from USA', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],  
    },

    
  ]
}

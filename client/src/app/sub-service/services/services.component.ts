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
  contentParams : any;
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
  table1_td3: any;
  table1_td4: any;
  table1_td5 : any; 
  table1_td6 : any;
  table1_td7 : any;
  table1_td8 : any;
  table1_td9 : any;
  table1_td10 : any;
  para1: any;
  para2:any;
  para3: any;
  para4: any;
  showMenu1: boolean = false;

  ngOnInit(): void {
    this.filterMethod();
  }

  ngDoCheck(){
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    this.filterMethod();
  }

  filterMethod() {
    this.headingParams = this.activatedRoute.snapshot.params['routing'];
    const filteredData = this.content.filter((x)=>x.routing == this.headingParams);
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
    this.table1_td3 = filteredData[0].table1_td3;
    this.table1_td4 = filteredData[0].table1_td4;
    this.table1_td5 = filteredData[0].table1_td5;
    this.table1_td6 = filteredData[0].table1_td6;
    this.table1_td7 = filteredData[0].table1_td7;
    this.table1_td8= filteredData[0].table1_td8;
    this.table1_td9= filteredData[0].table1_td9;
    this.table1_td10= filteredData[0].table1_td10;
    this.table2_th = filteredData[0].table2_th;
    this.table2_th2 = filteredData[0].table2_th2;
    this.table2_td = filteredData[0].table2_td;
    this.table2_td2 = filteredData[0].table2_td2;
    this.para1 = filteredData[0].para1;
    this.para2 = filteredData[0].para2;
    this.para3 = filteredData[0].para3;
    this.para4 = filteredData[0].para4;
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
      routing :  'x-ray-diffraction-xrd'
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
      para4 : "The benefit of using XRF analysers such as spectrometers is that they register this energy bloom in real-time. There are many techniques of sample preparation for analysis by an XRF spectrometer, including:",
      lists : ['Liquids', 'Solid', 'sample preparation Powders', 'Fused beads', 'Pellets'],
      routing : "x-ray-fluorescence-xrf"
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
      routing : "scanning-electron-microscope-sem"
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
      routing : "scanning-electron-microscope-sem-gold-sputtering"
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
      routing : "laser-particle-size-analyzer-psa"
    },
    {
      id : 6,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service6-sec-1.png',
      image_2 : '../../../assets/service6-sec-2.png',
      header : 'Thermal Testing',
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
      routing : "thermal-expansion-dilatometer-up-to-1000degc"
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
      routing : "bet-analysis"
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
      routing : "pin-on-disc-tribometer-wear"
    },
    {
      id : 9, 
      title : 'Material Preparation',
      image_1 : '../../../assets/service9-sec-1.jpg',
      image_2 : '../../../assets/service9-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Mill with Tungsten Carbide Balls & Vial per hour',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      students : '300 - Students',
      industries : '₹600 - Industries',
      para1 : 'Planetary ball mills are smaller than common ball mills and mainly used in laboratories for grinding sample material down to very small sizes. A planetary ball mill consists of at least one grinding jar which is arranged eccentrically on a so-called sun wheel.',
      para2 : 'VBCRC Planetary ball mill which is used for milling and mixing of different materials is primarily used for Advanced Ceramics. Mainly it is suitable for nanotechnology applications and the particle size is reduced from Micron (10-6µm) to Nano Size (10-9nm) within a short time of 30 to 60 minutes.',
      para3 : 'The Equipment is completely automatic with Time setting and Variable speed adjustments. Its features are:',
      table1_th : 'Vial Material',
      table1_th2 : 'Tungsten Carbide',
      table1_td : 'Vial Capacity',
      table1_td2 : '250 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Tungsten Carbide Balls (10 mm dia - 30 Nos)',
      table1_td5 : 'Max. Loading Capacity',
      table1_td6 : '100g (Depends upon Density of material)',
      table1_td7 : 'Min. Loading Capacity',
      table1_td8 : '5g',
      table1_td9 : 'Material Loss',
      table1_td10 : '2%',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Planetary Mill with TC balls & Vial',
      table2_td2 : '100 gms max for 1 Hour',
      routing : "planetary-mill-with-tungsten-carbide-balls"
    },
    {
      id : 10,
      title : 'Shaping',
      image_1 : '../../../assets/service10-sec-1.jpg',
      image_2 : '../../../assets/service10-sec-2.jpg',
      header : 'Shaping',
      heading: 'Pellet Press (10 tone)',
      description : 'Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press.',
      students : '₹200 - Students',
      industries : '₹500 - Industries',
      para1 : "Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press. It works very effectively and you can always rely on for the production of very fine pellets. To produce the small substances, it works by putting together smaller particles into larger and homogenous mass. It therefore implies that it doesn’t break the large materials into smaller substances.",
      para2 : "VBCRC Press is used to compact the different kinds of Ceramic and Metal Powders into Pellet shape for variety of Applications and Characterization.",
      para3 : "The Equipment is completely automatic with Time setting and Variable adjustments. Its features are:",
      table1_th : 'Capacity of Press',
      table1_th2 : '15 Ton',
      table1_td : 'Powders',
      table1_td2 : 'Ceramic and Metal Powders',
      table1_td3 : 'Binder',
      table1_td4 : 'Customer is expected to bring. (Otherwise PVA will be added)',
      table1_td5 : 'Die Material',
      table1_td6 : 'H11',
      table1_td7 : 'Die Size',
      table1_td8 : '10 mm, 20 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Pellet Press',
      table2_td2 : 'Per Pellet (up to 15 ton)',
      routing : "pellet-press-10-tone"
    },
    {
      id : 11, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service11-sec-1.png',
      image_2 : '../../../assets/service11-sec-2.png',
      header : 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1200°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '2000 - Students',
      industries : '₹3000 - Industries',
      para1 : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.',
      para2 : 'This Furnaces are operated under normal atmosphere are used to subject oxides and clay materials for heat treatment , Sintering etc. ,Its operating features are :',
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1200°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT of 1200°C', 'Tailor made box size as per the customer requirement', 'Kanthal heating element from Sweden', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],  
      routing : "box-furnace-up-to-1200degc"
    },
    {
      id : 12, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service12-sec-1.png',
      image_2 : '../../../assets/service12-sec-2.jpg',
      header : 'Heat Treatment Facility',
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
      routing : "box-furnace-up-to-1400degc"
    },
    {
      id : 13, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service13-sec-1.png',
      image_2 : '../../../assets/service13-sec-2.png',
      header : 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1600°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      para1 : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.',
      para2 : 'This Furnaces are operated under normal atmosphere are used to subject oxides and clay materials for heat treatment , Sintering etc. ,Its operating features are : ',
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1600°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT to 1600°C', 'Tailor made box size as per the customer requirement', 'Molybdenum di silicide heating elements from USA', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller'],  
      routing : "box-furnace-up-to-1600degc"
    },
    {
      id : 14, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service14-sec-1.jpg',
      image_2 : '../../../assets/service14-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Tubular Furnace with Controlled atmosphere 1200°C with Cold Vacuum & Argon Purging',
      description : "A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.",
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      para1 : 'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.',
      para2 : 'The Controlled atmospheric Furnaces will operate under specific gaseous atmospheres such as Argon, Nitrogen etc; It has the following operational characteristics:',
      table1_th : 'Available Space',
      table1_th2 : '60(ID) x 200(L) mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Tubular Furnace with controlled atmosphere - 1200°C with Cold Vacuum and Argon purging',
      table2_td2 : '2Hrs / Working Zone:50x150 mm',
      lists : ['Working Temperature up to RT to 1200°C', 'Tailor made tubular size as per the customer requirement','90% to 99.7% alumina tubes as per customer requirement', 'Kanthal heating element from Sweden', '1°C accuracy at dwell temp', 'Controlled heating rate(1 to 5°C/min)', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],  
      routing : "tubular-furnace-with-controlled-atmosphere-1200degc"
    },
    {
      id : 15, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service15-sec-1.jpg',
      image_2 : '../../../assets/service15-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Tubular Furnace with Controlled atmosphere 1600°C with Cold Vacuum & Argon Purging',
      description : "A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.",
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      para1 : 'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.',
      para2 : 'The Controlled atmospheric Furnaces will operate under specific gaseous atmospheres such as Argon, Nitrogen etc; It has the following operational characteristics:',
      table1_th : 'Available Space',
      table1_th2 : '60(ID) x 200(L) mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Tubular Furnace with controlled atmosphere - 1600°C with Argon purging',
      table2_td2 : '3Hrs / Working Zone:50x150 mm',
      lists : ['Working Temperature up to RT to 1600°C', 'Tailor made Tubular size as per the customer requirement', 'Molybdenum di silicide heating elements from USA', 'Imported RCA Tube from Halden Wanger Germany', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 5°C/min) programmable', 'Suitable for nanotechnology applications', 'Indigenously developed susceptor for reliable heat generation', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller * Working Temperature up to RT to 1400°C * Rough Vacuum (optional)'],  
      routing : "tubular-furnace-with-controlled-atmosphere-1600degc"
    },
    {
      id : 16, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service16-sec-1.jpg',
      image_2 : '../../../assets/service16-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Microwave Furnace up to 1500°C (20°C ramp & 30 min dwell)',
      description : "Microwave furnaces represent a system that combines free radiating heating elements with a microwave field.",
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      para1 : 'Microwave furnace is another type of laboratory furnace used to carry out thermal research protocols. Microwave furnaces represent a system that combines free radiating heating elements with a microwave field. Traditional heating elements heat material from the outside in, and microwave energy heats volumetrically. Key advantages include greater energy efficiency, faster sample heating, more uniform heating, and improved material properties.',
      para2 : 'We can ensure uniform heating of materials in microwave systems which operate with the following specifications :',
      table1_th : 'Available Space',
      table1_th2 : '75 x 75 x 75 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 25°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Microwave Furnace up to 1500°C',
      table2_td2 : '30min / Working Zone: 25x25x50 mm',
      lists : ['Working Temperature up to RT to 1500°C','Up to 10 KW with 2.45 GHz of magnetron', '1°C accuracy at dwell temp', 'Rapid heating rate(100°C/min) programmable', 'Suitable for nanotechnology applications', 'Indigenously developed susceptor for reliable heat generation', 'Imported Insulation (portable susceptor) * Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller', 'Computer Control (Optional)', 'Data logging (optional)'],  
      routing : "microwave-furnace-up-to-1500degc"
    },
    {
      id : 17, 
      title : 'Nano coating techniques',
      image_1 : '../../../assets/service17-sec-1.jpg',
      image_2 : '../../../assets/service17-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Spin Coating',
      description : "Spin coating is a method wherein an excess amount of a solution is placed on the substrate, which is then rotated at high speed in order to spread the fluid by centrifugal force.",
      students : '₹400 - Students',
      industries : '₹800 - Industries',
      para1 : 'Spin coating generally involves the application of a thin film (a few nm to a few um) evenly across the surface of a substrate by coating (casting) a solution of the desired material in a solvent (an "ink") while it is rotating. Put simply, a liquid solution is deposited onto a spinning substrate in order to produce a thin film of solid material, such as a polymer.',
      para2 : 'The rotation of the substrate at high speed (usually >10 rotations per second = 600 rpm) means that the centripetal force combined with the surface tension of the solution pulls the liquid coating into an even covering. During this time the solvent then evaporates to leave the desired material on the substrate in an even covering.',
      para3 : 'The Equipment is completely automatic with Time setting and Variable adjustments. Its features are:',
      table1_th : 'Substrate Size',
      table1_th2 : '25 mm',
      table1_td : 'Speed',
      table1_td2 : '100 - 6,000 rpm (Variable)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spin Coater',
      table2_td2 : 'Per Sample', 
      routing : "spin-coating"
    },
    {
      id : 18, 
      title : 'Nano coating techniques',
      image_1 : '../../../assets/service18-sec-1.jpg',
      image_2 : '../../../assets/service18-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Spray Pyrolysis',
      description : "Spray pyrolysis is a process in which a thin film is deposited by spraying a solution on a heated surface, where the constituents react to form a chemical compound.",
      students : '₹1000 - Students',
      industries : '₹3000 - Industries',
      para1 : 'Spray pyrolysis is a process in which a nanostructure is obtained when a solution containing a precursor is sprayed or injected using a nano porous nebulizer onto the hot substrate in the furnace, leading to the decomposition of the precursor to form the final desired material on the substrate.',
      para2 : 'Spray Pyrolysis unit capable of depositing a thin film by spraying a solution on a heated surface, where the constituents react to form a chemical compound is readily available. The chemical reactants are selected such that the products other than the desired compound are volatile at the temperature of deposition. The process is particularly useful for the deposition of oxides.',
      para3 : ' The Equipment is completely automatic with Time setting and Variable adjustments. Its features are:',
      table1_th : 'Max Substrate Temperature',
      table1_th2 : '500°C',
      table1_td : 'Working Area',
      table1_td2 : '150 x 150 mm',
      table1_td3 : 'Air Pressure',
      table1_td4 : '0.5 to 2 Bar',
      table1_td5 : 'Nozzle Diameter',
      table1_td6 : '0.5 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spray Pyrolysis',
      table2_td2 : 'Per Sample', 
      routing : "spray-pyrolysis"
    },
    {
      id : 19, 
      title : 'Nano coating techniques',
      image_1 : '../../../assets/service19-sec-1.png',
      image_2 : '../../../assets/service19-sec-2.png',
      header : 'Nano coating techniques',
      heading: 'Dip Coating',
      description : "Dip coating is an industrial coating process which is used, for example, to manufacture bulk products such as coated fabrics and specialised coatings for example in the biomedical field.",
      students : '₹250 - Students',
      industries : '₹500 - Industries',
      para1 : 'Dip coating is a process by which substrate material is submerged in conformal coating, then taken out and allowed to drip dry. Once the excess coating has drained, the substrate material is further dried using one of a variety of techniques, often baking.',
      para2 : 'Dip coating unit in which the immersion of a substrate into a tank containing coating material to develop desired coating is available . The coated piece is dried by force-drying or baking. It is a popular technique of producing thin film coated materials.',
      para3 : 'The Equipment is completely automatic with Time setting and Variable adjustments.',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Dip Coater',
      table2_td2 : 'Per Sample', 
      routing : "dip-coating"
    },
    {
      id : 20,
      title : 'Physical properties',
      image_1 : '../../../assets/service20-sec-1.jpg',
      image_2 : '../../../assets/service20-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Cold / Fired (MOR) Modulus of Rupture(max 3 samples), Flexural Strength',
      description : "Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'The modulus of rupture is defined as the rupture strength of the material. The maximum bending stress is applied to the material before it starts yielding. Sometimes, it is referred to as the tensile strength of the material.',
      para2 : "Flexural strength, also known as modulus of rupture, bend strength, or fracture strength, a mechanical parameter for brittle material which determines the material's ability to resist deformation under load is available.",
      para3 : "For a rectangular sample under a load in a three-point bending,",
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Cold / Fired MOR (Laboratory Scale)',
      table2_td2 : 'For 3 Samples',
      table1_td : 'Cold / Fired MOR',
      table1_td2 : 'Per Sample(For Industrial Tile sizes up to 600 x600 mm)',    
      lists : ["FS = 3FL/'2bd2", "F is the load (force) at the fracture point", "L is the length of the support span", "b is width", "d is thickness"],
      routing :  'cold-fired-mor-modulus-of-rupture-flexural-strength'
    },
    {
      id : 21, 
      title : 'Casting',
      image_1 : '../../../assets/service21-sec-1.jpg',
      image_2 : '../../../assets/service21-sec-2.jpg',
      header : 'Casting',
      heading: 'Aluminium Stir Casting',
      description : "It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.",
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      para1 : 'Stir casting is one of the most popular and widely used method in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called as liquid metallurgy.',
      para2 : 'Stir casting is a suitable processing technique to fabricate aluminium matrix composites and hybrid aluminium matrix composites as it is an economical process and preferred for mass production. The first step of stir casting involves melting of aluminium.',
      table1_th : 'Substrate Size',
      table1_th2 : '25 mm',
      table1_td : 'Speed',
      table1_td2 : '100 - 6,000 rpm (Variable)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spin Coater',
      table2_td2 : 'Per Sample', 
      routing : "aluminium-stir-casting"
    },
    {
      id : 22, 
      title : 'Casting',
      image_1 : '../../../assets/service22-sec-1.jpg',
      image_2 : '../../../assets/service22-sec-2.png',
      header : 'Casting',
      heading: 'Magnesium Stir Casting',
      description : "It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.",
      students : '₹4000 - Students',
      industries : '₹6000 - Industries',
      para1 :'Stir casting is one of the most popular and widely used method in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called as liquid metallurgy.',
      para2 : 'Stir casting process is suitable for casting of magnesium alloy as well as magnesium alloy composites. The addition of particle into the matrix is done by different proprietary methods. The mixing of particles into the molten metal was performed with the help of stirrer.',
      table1_th : 'Stir casting model',
      table1_th2 : 'fully automatic',
      table1_td : 'Material',
      table1_td2 : 'Aluminium',
      table1_td3 : 'Weight',
      table1_td4 : '500 gram to 2 kg',
      table1_td5 : 'Mould size',
      table1_td6 : '30 mm dia x200 mm length',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Magnesium Stir Casting',
      table2_td2 : 'Per Run', 
      routing : "magnesium-stir-casting"
    },
    {
      id : 23,
      title : 'Shaping',
      image_1 : '../../../assets/service23-sec-1.jpg',
      image_2 : '../../../assets/service23-sec-2.jpg',
      header : 'Shaping',
      heading: 'Extruder',
      description : 'Extruders are screw reactors, and extrusion is a series of processes which includes mixing, forming, puffing and drying.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Extruders are screw reactors, and extrusion is a series of processes which includes mixing, forming, puffing and drying.",
      para2 : "Extrusion, process in which metal or other material is forced through a series of dies to create desired shapes. Many ceramics are manufactured by extrusion, because the process allows efficient, continuous production. In a commercial screw-type extruder, a screw auger continuously forces the plastic feed material through an orifice or die, resulting in simple shapes such as cylindrical rods and pipes, rectangular solid and hollow bars, and long plates. In metalworking, extrusion converts a billet of metal into a length of uniform cross-section by forcing the billet through the orifice of a die; aluminium is easily extruded.",
      para3 : "Clay and Non Clay materials are formed into Cylindrical / Square shaped materials with the help of binders. Different sizes of Dies are available for Cylindrical / Square shapes.",
      routing : "extruder"
    },
    {
      id : 24, 
      title : 'Nano coating techniques',
      image_1 : '../../../assets/service24-sec-1.jpg',
      image_2 : '../../../assets/service24-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Chemical Vapour Deposition (CVD)',
      description : "It is a technique where a solid material is deposited from a vapor by some chemical reaction occurring on or in the vicinity of a normally heated substrate surface",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Chemical vapour deposition (CVD) is a coating process that uses thermally induced chemical reactions at the surface of a heated substrate, with reagents supplied in gaseous form. These reactions may involve the substrate material itself, but often do not.',
      para2 : 'The Chemical Vapour Deposition is mainly used in the field of nanotechnology to develop Nano materials with different structures and dimensions. Its applications are :',
      lists : ['Preparation of Carbon Nano Tubes (CNTs)', 'Development of different Nano Thin Film Coatings'],
      routing : "chemical-vapour-deposition-cvd"
    },
    {
      id : 25, 
      title : 'Casting',
      image_1 : '../../../assets/service25-sec-1.jpg',
      image_2 : '../../../assets/service25-sec-2.jpg',
      header : 'Casting',
      heading: 'Slip Casting',
      description : "Slip Casting is a technique used for the production of complex shapes from a suspension poured into a mold.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Slip casting is a technique most widely used in the field of geopolymers. It is used for the production of complex shapes from a suspension poured into a mold. The suspension is made of raw materials in powder form, dispersed in a liquid which, in the case of geopolymers, is water.',
      para2 : 'Slip casting which is also known as drain casting is the most common ceramic casting process. Slip casting has the advantage of permitting the making up of a large number of exact replicas of an original model-such as set of Plates, Ash trays, Vases etc.',
      routing : "slip-casting"
    },
    {
      id : 26, 
      title : 'Material Preparation',
      image_1 : '../../../assets/service26-sec-1.png',
      image_2 : '../../../assets/service26-sec-2.png',
      header : 'Material Preparation',
      heading: 'Sol Gel Route',
      description : "In materials science, the sol–gel process is a method for producing solid materials from small molecules.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'The sol-gel process is a more chemical method (wet chemical method) for the synthesis of various nanostructures, especially metal oxide nanoparticles. In this method, the molecular precursor (usually metal alkoxide) is dissolved in water or alcohol and converted to gel by heating and stirring by hydrolysis/ alcoholysis.',
      para2 : ' Most of the Ceramic nano materials are prepared by Sol-Gel Technique. This is a wet chemical route for the synthesis of colloidal dispersions of oxides which can be made into powders, fibres, thin films and monoliths. Formation of crystals from the gel medium is achieved by creating a state of super saturation in the gel medium either by evaporation or cooling. Things which are provided are:',
      lists : ['Chemicals for Sol- Gel Method (As required by the customer)', 'Magnetic Stirrer cum Heater - 2 Numbers', 'Hot Air Oven'],  
      routing : "sol-gel-route"
    },
    {
      id : 27, 
      title : 'Material Preparation',
      image_1 : '../../../assets/service27-sec-1.jpg',
      image_2 : '../../../assets/service27-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Ball Mill with Alumina Jar(500ml)',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Planetary Ball Mill is designed for mixing, fine grinding, and preparing small volume high-tech material production, which features with small volume, high efficiency, low noise.',
      para2 : 'VBCRC Planetary ball mill which is used for milling and mixing of different materials is primarily used for Advanced Ceramics. Mainly it is suitable for nanotechnology applications and the particle size is reduced from Micron (10-6µm) to Nano Size (10-9nm) within a short time of 30 to 60 minutes.',
      para3 : 'The Equipment is completely automatic with Time setting and Variable speed adjustments. Its features are:',
      table1_th : 'Vial Material',
      table1_th2 : 'Alumina',
      table1_td : 'Vial Capacity',
      table1_td2 : '500 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Alumina Balls (10 mm dia - 30 Nos)',
      table1_td5 : 'Max. Loading Capacity',
      table1_td6 : '100g (Depends upon Density of material)',
      table1_td7 : 'Min. Loading Capacity',
      table1_td8 : '5g',
      table1_td9 : 'Material Loss',
      table1_td10 : '2%',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Planetary Ball Mill with Alumina Jar',
      table2_td2 : '100 gms max for 1 Hour',
      routing : "planetary-ball-mill-with-alumina-jar-500ml"
    },
    {
      id : 28, 
      title : 'Material Preparation',
      image_1 : '../../../assets/service28-sec-1.jpg',
      image_2 : '../../../assets/service28-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Jar Mill (5 litre)',
      description : "Jar Mills are used for wet or dry grinding, mixing and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Jar Mills are used for wet or dry grinding, mixing and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc. Different size jars are available for different grinding conditions. A bench or floor model Jar Mills from Gilson have capacities from one to six jars.',
      para2 : 'The Equipment is completely automatic with Time setting and Variable speed adjustments. Its features are:',
      table1_th : 'Jar material',
      table1_th2 : 'Stainless steel',
      table1_td : 'Grinding Media',
      table1_td2 : 'High Purity alumina',
      table1_td3 : 'Jar capacity',
      table1_td4 : '5 liter',
      routing : "jar-mill"
    },
    {
      id : 29, 
      title : 'Material Preparation',
      image_1 : '../../../assets/gloveBox.png',
      image_2 : '../../../assets/service29-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Glove Box',
      description : "A glovebox is a sealed container that is designed to allow one to manipulate objects where a separate atmosphere is desired.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Glove boxes, or gloveboxes, are a sealed container used to manipulate objects in another environment. A glove box is ideal for protecting workers in applications that involve handling hazardous material or manipulating substances that require a controlled environment. Choose from inflatable glove bags, basic glove boxes, controlled atmosphere glove boxes, or biohazard and multi hazard glove boxes.',
      para2 : ' Common uses for inert atmosphere glove boxes include chemical synthesis, organic electronics, additive manufacturing, materials handling and storage, development of battery technology, and perovskite electronics.',
      para3 : 'To maintain an inert atmosphere inside the glove box, it is important that you make sure that the inner atmosphere is exposed to as little moisture and oxygen as possible. There are two main ways that the inner atmosphere can be compromised; via physical leaks in the box, or by the ingression of moisture and oxygen through the materials that make up the chamber.',
      routing : "glove-box"
    },
    {
      id : 30, 
      title : 'Material Preparation',
      image_1 : '../../../assets/service30-sec-1.jpg',
      image_2 : '../../../assets/service30-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Ball Mill with Porcelain Jar(500ml)',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'VBCRC Planetary ball mill is employed for milling and mixing of different materials which are used for Traditional Ceramics. Mainly it is Suitable for casting applications and the Particle size is reduced from Millimetre (10-3mm) to Micron Size (10-6µm).',
      para2 : ' The Equipment is completely automatic with Time setting and Variable speed adjustments, whose features are:',
      table1_th : 'Vial Material',
      table1_th2 : 'Porcelain Jar',
      table1_td : 'Vial Capacity',
      table1_td2 : '500 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Alumina / Steatite',
      table1_td5 : 'Grinding Media Size',
      table1_td6 : '10mm & 20mm dia',
      table1_td7 : 'Max. Loading Capacity',
      table1_td8 : '300g (Depends upon Density of material)',
      table1_td9 : 'Min. Loading Capacity',
      table1_td10 : '50g',
      routing : "planetary-ball-mill-with-porcelain-jar-500ml"
    },
    {
      id : 31,
      title : 'Physical properties',
      image_1 : '../../../assets/service31-sec-1.png',
      image_2 : '../../../assets/service31-sec-2.png',
      header : 'Physical properties',
      heading: 'Bulk Density, Porosity, Water Absorption, Fired Shrinkage',
      description : "Finding Bulk Density, Porosity, Water Absorption, Fired Shrinkage",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Bulk density is usually determined by measuring the volume of 100 g of powder in a 250 ml graduated cylinder after exposure to compaction by standardized tapping.',
      para2 : 'Porosity or void fraction is a measure of the void spaces in a material, and is a fraction of the volume of voids over the total volume, between 0 and 1, or as a percentage between 0% and 100%.',
      para3 : 'Water absorption is defined as the amount of water absorbed by a material and is calculated as the ratio of the weight of water absorbed to the weight of the dry material.',
      para4 : 'Fired shrinkage (shrinkage from dry to fired) is a thus comparative indicator of the degree of vitrification. As a clay is fired higher it shrinks more and more to a point of maximum shrinkage (after which swelling occurs as a precursor to melting).',
      routing :  'bulk-density-porosity-water-absorption-fired-shrinkage'
    },
    {
      id : 32,
      title : 'Physical properties',
      image_1 : '../../../assets/service32-sec-1.png',
      image_2 : '../../../assets/service32-sec-2.png',
      header : 'Physical properties',
      heading: 'Particle Size Distribution',
      description : "A particle size distribution indicates the percentage of particles of a certain size (or in a certain size interval). These intervals are also called size classes or fractions.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'A particle size distribution indicates the percentage of particles of a certain size (or in a certain size interval). These intervals are also called size classes or fractions. In granulometry, the particle-size distribution of a powder, or granular material, or particles dispersed in fluid, is a list of values or a mathematical function that defines the relative amount, typically by mass, of particles present according to size.',
      para2 : 'Particle size analysis is important in all industries as they determine the properties of the system. Especially for nano particles, Laser light scattering method is employed which can be used to measure the size of the particles ranging from 0.3 nm and even up to 5 mm. For particles whose sizes are bigger even up to 30 mm can also be measured and the size distributions can be plotted.',
      routing :  'particle-size-distribution'
    },
    {
      id : 33,
      title : 'Physical properties',
      image_1 : '../../../assets/service33-sec-1.jpg',
      image_2 : '../../../assets/service33-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Cold Crushing Strength (CSS)',
      description : "The Cold Crushing Strength (CCS) represents the ability of a product to resist failure under compressive load at room temperature.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Cold crushing strength (CCS) is a compressive test that measures the ability of a product to withstand a given load, normally measured at room temperature after firing to specific temperatures. It is measured by ASTM C133. Particle distribution and packing are very important in developing good CCS—and cement maturity, while important, does not affect this measurement as much as it does MOR.',
      para2 : 'It has an indirect relevance to refractory performance, and is used as one of the indicators of abrasion resistance. The higher the CCS of a material is the greater should be the resistance to abrasion. Refractories with high CCS are also expected to have higher resistance to slag attack. The determination of cold crushing strength (CCS) is also highly important in the case of refractory insulating bricks where bricks have to be porous as well as strong.',
      routing :  'cold-crushing-strength-css'
    },
    {
      id : 34,
      title : 'Physical properties',
      image_1 : '../../../assets/service34-sec-1.jpg',
      image_2 : '../../../assets/service34-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Impact Resistance',
      description : "Impact resistance (or impact strength) describes a material's or a product's ability to absorb shock or impact energy without breaking.",
      industries : '₹ - Enquire for Estimate',
      para1 : "Impact resistance (or impact strength) describes a material's or a product's ability to absorb shock or impact energy without breaking. Something that feels strong and stiff might be surprisingly easy to break with a bump to the right spot.",
      para2 : "The test involves striking a notched or V-notch specimen with a pendulum hammer and measuring the amount of energy absorbed by the specimen during fracture. The energy absorbed indicates the material's ability to resist fracture and absorb impact forces.",
      para3 : " It is a critical property that determines the material's ability to withstand sudden forces. Designing components that will be subjected to high impact or shock loads hinges upon an understanding of these measurements, to allow for potential failures.",
      routing :  'impact-resistance'
    },
    {
      id : 35,
      title : 'Physical properties',
      image_1 : '../../../assets/service35-sec-1.png',
      image_2 : '../../../assets/service35-sec-2.gif',
      header : 'Physical properties',
      heading: 'Abrasion Resistance',
      description : "Abrasion resistance refers to the ability of materials and structures to withstand abrasion.",
      industries : '₹ - Enquire for Estimate',
      para1 : "Abrasion resistance refers to the ability of materials and structures to withstand abrasion. It is a method of wearing down or rubbing away by means of friction. This ability helps to keep the material's original structure and look. Abrasion resistance resists mechanical wear.",
      para2 : "Abrasion resistance refers to the hardness of a material. The harder the material is, the more resistant it will be to abrasion. This property can be measured with an abrasion test, which uses abrasive paper to measure how much material is lost after a certain amount of time.",
      routing :  'abrasion-resistance'
    },
    {
      id : 36,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service36-sec-1.jpg',
      image_2 : '../../../assets/service36-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Creep Resistance',
      description : 'The ability of the material to resist any kind of distortion when subjected to prolonged compressive load over an extended period of time.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Creep resistance is the ability of the material to resist any kind of distortion when subjected to prolonged compressive load over an extended period of time. Creep generally develops in materials that are subjected to mechanical stress at high operating temperature and pressure.",
      para2 : " Creep in compression is a measure of the percentage of shrinkage of a test piece of a refractory or any other material under a constant load and exposed to a constant high temperature over a long period of time.The shrinkage is measured digitally with the high-resolution (1-micrometer) linear variable differential transformer (LVDT) measuring system. Then the values are determined from LVDT connected through a special cable to a Computer. Using Labview software Online Graph is plotted between Temperature Vs % of Total Expansion is obtained .The unit has the following specifications:",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1700°C',
      table1_td : 'Sample Size',
      table1_td2 : 'OD: 50 mm, Length: 50 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'CREEP up to 1600°C',
      table2_td2 : '24 Hours',
      routing : "creep-resistance"
    },
    {
      id : 37,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service37-sec-1.jpg',
      image_2 : '../../../assets/service37-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Hot Modulus Of Rupture (HMOR)',
      description : "It is the material's ability to resist deformation under load with Constant Temperature.",
      industries : '₹ - Enquire for Estimate',
      para1 : "HMOR also known as Hot modulus of rupture, hot bend strength, or fracture strength at a certain Temperature, a mechanical parameter used for brittle material, is the material's ability to resist deformation under load with Constant Temperature.",
      para2 : "It is an important variable in the characterization of refractory materials. Determination of the maximum load at high temperatures is an important parameter for quality control and development of furnace linings.",
      para3 : "It can be measured with the available equipment which has the following specifications :",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1700°C',
      table1_td : 'Sample Size',
      table1_td2 : '25 mm X25 mm x 150 mm',
      table1_td3: 'Available Space',
      table1_td4: '≈ 200 x 200 x 300 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'HMOR up to 1700°C',
      table2_td2 : '4 Hours for 5 Samples',
      routing : "hot-modulus-of-rupture-hmor"
    },
    {
      id : 38,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service38-sec-1.png',
      image_2 : '../../../assets/service38-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Conductivity',
      description : 'It refers to the ability of a given material to conduct or transfer heat.',
      industries : '₹ - Enquire for Estimate',
      para1 : "The Thermal Conductivity of a material is a measure of its ability to conduct heat. It is commonly denoted by k, \lambda, or \kappa. Heat transfer occurs at a lower rate in materials of low thermal conductivity than in materials of high thermal conductivity.",
      para2 : "This test method is used for the determination of thermal conductivity of non-carbonaceous dielectric refractories . Thermal conductivity values can be determined from room temperature to 1400°C, or the maximum service limit of the refractory, or to the temperature at which the refractory is no longer dielectric.",
      para3 : "Thermal conductivity λ is defined as ability of material to transmit heat and it is measured in watts per square metre of surface area for a temperature gradient of 1 K per unit thickness of 1 m. The thermal conductivity is not always constant.",
      para4 : "It can be measured with the available equipment which has the following specifications :",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1400°C',
      table1_td : 'Sample Size',
      table1_td2 : '225 mm X 115 mm x 75 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Thermal Conductivity for Refractory Bricks up to 1400°C',
      table2_td2 : '4 Hours, 6 Hours',
      routing : "thermal-conductivity"
    },
    {
      id : 39,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service39-sec-1.png',
      image_2 : '../../../assets/service39-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Permanent Linear Change (PLC)',
      description : 'It is a factor used to judge the suitability of refractories in ranges of temperature limits.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Permanent Linear Change (PLC) is a factor used to judge the suitability of refractories in ranges of temperature limits. Refractory materials can undergo mineral formation, phase transformation or shrinkage when heated. These processes may result in either volume expansion or reduction.",
      para2 : "Linear change can be measured experimentally. It is tested by heating the refractory to a predetermined temperature, holding a certain time and then cooling it to room temperature. The measuring temperature and time should be chosen according to the technical standard of each product.",
      routing : "permanent-linear-change-plc"
    },
    {
      id : 40,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service40-sec-1.png',
      image_2 : '../../../assets/service40-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Refractory Under Load (RUL)',
      description : 'It is a measure of the deformation behaviour of refractory ceramic products exposed to a constant load and increasing temperature.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Refractoriness under load (RUL, according to ISO 1893) is a measure of the deformation behaviour of refractory ceramic products subjected to a constant load and increasing temperature. The temperature range in which the softening occurs is not identical with the melting range of the pure raw material; however it must be reliably determined with the RUL 421 to check the use of refractory products in high-temperature applications.",
      routing : "refractory-under-load-rul"
    },
    {
      id : 41,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service41-sec-1.png',
      image_2 : '../../../assets/service41-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Pyrometric Cone Equivalent (PCE)',
      description : 'They are used to determine the Cone equivalent of an unknown raw material by placing several different PCE cones alongside an unknown raw material (that has been pressed into the same shape as a cone).',
      industries : '₹ - Enquire for Estimate',
      para1 : 'PCE stands for "Pyrometric Cone Equivalent". They are used to determine the Cone equivalent of an unknown raw material by placing several different PCE cones alongside an unknown raw material (that has been pressed into the same shape as a cone).',
      para2 : "Pyrometric cones are used worldwide to monitor ceramic firings in industrial kilns, pottery kilns, and small hobby kilns where the consistent temperature is important to the quality of the final product being fired. Pyrometric cones measure heat-work, the effect of time, and temperature.",
      routing : "pyrometric-cone-equivalent-pce"
    },
    {
      id : 42,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service42-sec-1.png',
      image_2 : '../../../assets/service42-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Cycling',
      description : 'It is defined as any recursive thermal test in which the temperature is regularly altered, touching a high-temperature peak and a low-temperature peak.',
      industries : '₹ - Enquire for Estimate',
      para1 : "A Thermal cycle is defined as any recursive thermal test in which the temperature is regularly altered, touching a high-temperature peak and a low-temperature peak. Thermal Cycle or Temperature Cycling is carried out on materials to ascertain the resistance of exposure to alternating extremes of low and High Temperatures. Performing temperature cycling test on the components will assist in determining: Existing thermal coefficient mismatches.",
      para2 : "The goal of thermal cycling is to verify the performance of the design on qualification units and to identify any workmanship or material defects in acceptance units.",
      para3 : "The duration of time spent on thermal cycling will vary depending on the volume of the sample and the specific equipment that's used but it typically takes between one and four hours. Following thermal cycling, electrophoresis might be performed to analyse the samples and conduct further research.",
      routing : "thermal-cycling"
    },
    {
      id : 43,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service43-sec-1.png',
      image_2 : '../../../assets/service43-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Slag Testing',
      description : 'It is the wear and tear of refractories caused by static chemical attack of slag.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Slag is the glass-like by-product left over after the desired metal has been separated (i.e., smelted) from its raw ore. Slag is usually a mixture of metal oxides and silicon dioxide.",
      para2 : "The slag attack on the refractories in contact may be in the two ways: Corrosion - It is the wear and tear of refractories caused by static chemical attack of slag. Erosion - It is wear caused my mechanical action i.e. the process of breaking and washing away of refractory materials by molten slag.",
      routing : "slag-testing"
    },
    {
      id : 44,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service44-sec-1.jpg',
      image_2 : '../../../assets/service44-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Sieve Analysis',
      description : 'It is a method that is used to determine the grain size distribution of soils that are greater than 0.075 mm in diameter.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Sieve analysis is a method that is used to determine the grain size distribution of soils that are greater than 0.075 mm in diameter. It is usually performed for sand and gravel but cannot be used as the sole method for determining the grain size distribution of finer soil.",
      para2 : "Sieve analysis is used to obtain the particle size distribution of a solid material by determining the amount of powder retained on a series of sieves with different sized apertures. A sample is added to the top of a nest of sieves arranged in decreasing size from top to bottom.",
      para3 : "Formula : Divide the masses for each sieve (individual/cumulative) by the total dry mass before washing and multiply by 100 to determine the percent retained on and passing each sieve. Calculate the percent retained and passing each sieve to the nearest 0.1%.",
      routing : "sieve-analysis"
    },
    {
      id : 45,
      title : 'Thermal Testing',
      image_1 : '../../../assets/service45-sec-1.png',
      image_2 : '../../../assets/service45-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Shock Resistance',
      description : 'It is the ability of a solid to withstand sudden changes in temperature either during heating or cooling.',
      industries : '₹ - Enquire for Estimate',
      para1 : "Thermal shock resistance is the ability of a solid to withstand sudden changes in temperature either during heating or cooling. Traditionally, thermal shock conditions can be simulated in the laboratory using either water or air after exposure to a furnace environment.",
      para2 : "Thermal shock resistance is the property of a material that makes it resistant to sudden and rapid temperature changes. Materials having high thermal shock resistance properties are able to withstand wide temperature variations.",
      para3 : "To compute for thermal shock resistance, four essential parameters are needed and these parameters are High Fracture Strength (σf), Thermal Conductivity (K), Elastic Modulus (E) and Linear Coefficient of Thermal Expansion (αL).",
      routing : "thermal-shock-resistance"
    },
    {
      id : 46,
      title : 'Raw Materials',
      image_1 : '../../../assets/service46-sec-1.jpg',
      image_2 : '../../../assets/service46-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Ball Clay',
      description : "Ball clays are fine-grained, highly plastic clays.",
      industries : '₹ - Enquire for Estimate',
      para1 : "Ball clays are fine-grained, highly plastic clays, which are principally used in the manufacture of ceramic whiteware and sanitaryware where they are appreciated for their plasticity, unfired strength and their light colour on firing.",
      para2 : "Ball clays are kaolinitic sedimentary clays that commonly consist of 20–80% kaolinite, 10–25% mica and 6–65% quartz, along with small amounts of organic matter (such as lignite) and trace amounts of other minerals such as pyrite and siderite.",
      routing :  'ball-clay'
    },
    {
      id : 47,
      title : 'Raw Materials',
      image_1 : '../../../assets/service47-sec-1.jpg',
      image_2 : '../../../assets/service47-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'China Clay',
      description : "Kaolin, also called China clay, soft white clay that is an essential ingredient in the manufacture of China and porcelain and is widely used in the making of paper, rubber, paint, and many other products.",
      industries : '₹ - Enquire for Estimate',
      para1 : "Kaolin, also called China clay, soft white clay that is an essential ingredient in the manufacture of China and porcelain and is widely used in the making of paper, rubber, paint, and many other products.",
      para2 : "In its natural state kaolin is a white, soft powder consisting principally of the mineral kaolinite, which, under the electron microscope, is seen to consist of roughly hexagonal, platy crystals ranging in size from about 0.1 micrometre to 10 micrometres or even larger.",
      para3 : "China Clay (Kaolin) is formed by the decomposition of minerals particularly Feldspar which is the main ingredient in a rock called Granite. This is not a quick process and it happened millions of years ago between the late Cretaceous and early Paleogene periods.",
      routing :  'china-clay'
    },
    {
      id : 48,
      title : 'Raw Materials',
      image_1 : '../../../assets/service48-sec-1.jpg',
      image_2 : '../../../assets/service48-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Than Clay',
      description : "Than fire clay is a range of refractory clays used in the manufacture of ceramics, especially fire brick.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Fire clay is a range of refractory clays used in the manufacture of ceramics, especially fire brick. The United States Environmental Protection Agency defines fire clay very generally as a "mineral aggregate composed of hydrous silicates of aluminium (Al2O3·2SiO2·2H2O) with or without free silica.',
      para2 : 'High-grade fire clays can withstand temperatures of 1,775 °C (3,227 °F), but to be referred to as a "fire clay" the material must withstand a minimum temperature of 1,515 °C (2,759 °F). Fire clays range from flint clays to plastic fire clays, but there are semi-flint and semi-plastic fire clays as well. Fire clays consist of natural argillaceous materials, mostly Kaolinite group clays, along with fine-grained micas and quartz, and may also contain organic matter and sulphur compounds.',
      para3 : 'The chemical composition typical for fire clays are 23-34% Al2O3, 50-60% SiO2 and 6-27% loss on ignition together with various amounts of Fe2O3, CaO, MgO, K2O, Na2O and TiO2. Chemical analyses from two 19th-century sources, shown in table below, are somewhat lower in alumina, although a more contemporary source quotes analyses that are closer.',
      routing :  'than-clay'
    },
    {
      id : 49,
      title : 'Raw Materials',
      image_1 : '../../../assets/service49-sec-1.jpg',
      image_2 : '../../../assets/service49-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Feldspar',
      description : "Feldspar is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Feldspar (sometimes spelled felspar) is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium. The most common members of the feldspar group are the plagioclase (sodium-calcium) feldspars and the alkali (potassium-sodium) feldspars.',
      para2 : 'Feldspar is an important source of alumina in the glassmaking and the ceramics industries. In ceramics, it acts as a flux and provides the vitreous lustre of chinaware and ceramic tiles. It is used in glazes and enamels and is an important mineral filler in paints, plastics, sealants, and adhesives.',
      para3 : 'All the rock-forming feldspars are aluminosilicate minerals with the general formula AT4O8 in which A = potassium, sodium, or calcium (Ca); and T = silicon (Si) and aluminium (Al), with a Si : Al ratio ranging from 3:1 to 1:1.',
      routing :  'feldspar'
    },
    {
      id : 50,
      title : 'Raw Materials',
      image_1 : '../../../assets/service50-sec-1.jpg',
      image_2 : '../../../assets/service50-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Quartz',
      description : "Quartz is a hard, crystalline mineral composed of silica (silicon dioxide).",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Quartz is a hard, crystalline mineral composed of silica (silicon dioxide). The atoms are linked in a continuous framework of SiO4 silicon–oxygen tetrahedra, with each oxygen being shared between two tetrahedra, giving an overall chemical formula of SiO2.',
      para2 : 'Quartz exists in two forms, the normal α-quartz and the high-temperature β-quartz, both of which are chiral. The transformation from α-quartz to β-quartz takes place abruptly at 573 °C (846 K; 1,063 °F). Since the transformation is accompanied by a significant change in volume, it can easily induce micro fracturing of ceramics or rocks passing through this temperature threshold.',
      para3 : 'Today quartz is used in many products as a raw material for huge amounts of construction materials, such as glass, concrete, or mortar, and quartz is refined to yield silicon which is critical for computers and other high technology mainstay of modern life.',
      routing :  'quartz'
    },
    {
      id : 51,
      title : 'Raw Materials',
      image_1 : '../../../assets/service51-sec-1.jpg',
      image_2 : '../../../assets/service51-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Alumina',
      description : "Alumina (Aluminium Oxide) is the most widely used oxide ceramic material. Its applications are widespread, and include spark plugs, tap washers, abrasion resistant tiles, and cutting tools.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Aluminium oxide or alumina (Al2O3) occurs naturally as corundum, and can be made by burning aluminium in oxygen or by heating hydroxide, nitrate, or sulphate of the metal. Industrially, alumina is separated from bauxite, an important ore containing about 30–54% alumina plus iron (III) oxide (Fe2O3) and silica (SiO2).',
      para2 : 'Alumina is widely used in a variety of industrial abrasive materials, owing to its superior hardness and strength. Similarly, alumina can be used as a coating to protect against abrasion.',
      routing :  'alumina'
    },
    {
      id : 52,
      title : 'Raw Materials',
      image_1 : '../../../assets/service52-sec-1.jpg',
      image_2 : '../../../assets/service52-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Zirconia',
      description : "Zirconia is a white solid ceramic glaze and one of several newer materials that combine metal's strength with the aesthetic, tooth-like appeal of porcelain.",
      industries : '₹ - Enquire for Estimate',
      para1 : "Zirconia is a white solid ceramic glaze and one of several newer materials that combine metal's strength with the aesthetic, tooth-like appeal of porcelain. And zirconia crowns are continually being developed to further improve their performance.",
      para2 : 'Zirconia products are characterised by good mechanical properties and stability at high temperatures, strong thermal and corrosion resistance, chemical inertness and consistent quality. This makes them ideal for use in a wide range of refractory products, ceramic colours and pigments and electronic applications.',
      para3 : 'Other applications include friction materials, welding rods and zirconium metal and alloys. Advanced zirconia ceramics have excellent biocompatibility ensuring zirconia has replaced alumina as the material of choice for prosthesis devices such as hip joints or femoral ball heads. It has superior strength and hardness, wear resistance, stability, resistance to scratching and biocompatibility with the human body. One of zirconia’s other most common uses is within dental implants.',
      routing : 'zirconia'
    },
    {
      id : 53,
      title : 'Raw Materials',
      image_1 : '../../../assets/service53-sec-1.jpg',
      image_2 : '../../../assets/service53-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Silicon Carbide',
      description : "Silicon carbide, also known as carborundum, is a hard chemical compound containing silicon and carbon.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'Silicon carbide (SiC), also known as carborundum, is a hard chemical compound containing silicon and carbon. A semiconductor, it occurs in nature as the extremely rare mineral moissanite, but has been mass-produced as a powder and crystal.',
      para2 : 'Grains of silicon carbide can be bonded together by sintering to form very hard ceramics that are widely used in applications requiring high endurance, such as car brakes, car clutches and ceramic plates in bulletproof vests. Large single crystals of silicon carbide can be grown by the Lely method and they can be cut into gems known as synthetic moissanite.',
      para3 : 'Silicon carbide is used as an abrasive, as well as a semiconductor and diamond simulant of gem quality. The simplest process to manufacture silicon carbide is to combine silica sand and carbon in an Acheson graphite electric resistance furnace at a high temperature, between 1,600 °C (2,910 °F) and 2,500 °C (4,530 °F).',
      routing :  'silicon-carbide'
    },
    {
      id : 54, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service54-sec-1.png',
      image_2 : '../../../assets/service54-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Hot Air Oven',
      description : "Hot air ovens are electrical devices which use dry heat to sterilize A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials. It works by circulating hot air inside the oven chamber to evenly distribute heat to the materials being processed. Hot air ovens are often used in a variety of settings, including research laboratories, industrial settings, and educational institutions.',
      para2 : 'Hot air ovens typically have a temperature range of ambient temperature to 250°C or higher and are equipped with a thermostat to maintain a consistent temperature. Some hot air ovens also have a fan to circulate the hot air inside the oven chamber, which can help to ensure that the materials being processed are heated or dried evenly. Hot air ovens are commonly used to sterilize equipment and materials, as the high temperatures can kill microorganisms. They are also used to dry materials, such as chemicals, biological specimens, and glassware. In addition, hot air ovens can be used to heat materials for a variety of purposes, such as activating chemicals or heating materials to a specific temperature for testing.',
      table1_th : 'Hot Zone Size',
      table1_th2 : '450mmx 450mmx 450mm',
      table1_td : 'Tray',
      table1_td2 : '3 Nos. - Stainless steel',
      table1_td3 : 'Max Temp',
      table1_td4 : '250°C',
      routing : "hot-air-oven"
    }
  ];

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

  imagesNav=[
    './assets/images/menu_own.svg',
    './assets/images/icons8-close.svg',
  ];
  currentImageIndex15 = 0;
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
}

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

  ngOnInit(): void {
    this.headingParams = this.activatedRoute.snapshot.params['routing'];
    console.log(this.headingParams);
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
      para4 : "There are many techniques of sample preparation for analysis by an XRF spectrometer, including:",
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
      id : 11, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service11-sec-1.png',
      image_2 : '../../../assets/service11-sec-2.png',
      header : 'Heat treatment facility',
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
      routing : "box-furnace-up-to-1400degc"
    },
    {
      id : 13, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service13-sec-1.png',
      image_2 : '../../../assets/service13-sec-2.png',
      header : 'Heat treatment facility',
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
      header : 'Heat treatment facility',
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
      header : 'Heat treatment facility',
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
      header : 'Heat treatment facility',
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
      image_1 : '../../../assets/service29-sec-1.jpg',
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
      id : 54, 
      title : 'Heat Treatment Facility',
      image_1 : '../../../assets/service54-sec-1.png',
      image_2 : '../../../assets/service54-sec-2.jpg',
      header : 'Heat treatment facility',
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
  ]
}

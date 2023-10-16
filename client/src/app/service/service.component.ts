//import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  filteredList = new MatTableDataSource([]);
  filteredSelector = new MatTableDataSource([]);
  showMenu1: boolean = false;

  mainArray = [];
  isAll = false;
  isAllServices = false;
  isRawMaterials = false;
  isSophisticated = false;
  isPhysicalProperties = false;
  isThermalTesting = false;
  isHeatTreatment = false;
  isMaterialPreparation = false;
  isShaping = false;
  isNanoCoating = false;
  isCasting = false;
  isFilter = false;

  ngOnInit(){
    this.filteredList =new MatTableDataSource(this.service);
    this.filteredSelector =new MatTableDataSource(this.service);
  }
  
  service = [
    {
      service_id: 1,
      img: '../../assets/service1.jpg',
      header : 'Sophisticated Instruments',
      heading : 'X-Ray Diffraction (XRD)',
      description : 'It is a non-destructive method for analysing matters ranging from liquids to crystals.',
      students : '₹750 - Students',
      industries : '₹1500 - Industries',
      isShown : this.isSophisticated,
      routing :  'x-ray-diffraction-xrd',
    },
    {
      service_id: 2,
      img: '../../assets/service2.png',
      header : 'Sophisticated Instruments',
      heading : 'X-Ray Fluorescence (XRF) ',
      description : 'It is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by being bombarded with high-energy X-rays or gamma rays.',
      students : '₹1500 - Students',
      industries : '₹2200 - Industries',
      isShown : this.isSophisticated,
      routing : "x-ray-fluorescence-xrf",
    },
    {
      service_id: 3,
      img: '../../assets/service3.png',
      header : 'Sophisticated Instruments',
      heading : 'Scanning Electron Microscope (SEM)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image',
      students : '₹1000 - Students', 
      industries : '₹2000 - Industries',
      isShown : this.isSophisticated,
      routing : "scanning-electron-microscope-sem"
    },
    {
      service_id: 4,
      img: '../../assets/service4.png',
      header : 'Sophisticated Instruments',
      heading : 'Scanning Electron Microscope (SEM- Gold Sputtering)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The process is done once it’s coated with ultra-thin electrically-conducting metal.',
      students : '₹1250 - Students',
      industries : '₹2500 - Industries',
      isShown : this.isSophisticated,
      routing : "scanning-electron-microscope-sem-gold-sputtering"
    },
    {
      service_id: 5,
      img: '../../assets/service5.png',
      header : 'Sophisticated Instruments',
      heading : 'Laser Particle Size Analyzer (PSA)',
      description : 'It is used to measure the sizes of particles in a material. Particle size is calculated by measuring the angle of light scattered by the particles as they pass through a laser beam.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      isShown : this.isSophisticated,
      routing : "laser-particle-size-analyzer-psa"
    },
    {
      service_id: 6,
      img: '../../assets/service6.jpg',
      header : 'Thermal testing',
      heading : 'Thermal Expansion (Dilatometer up to 1000°C)',
      description : 'A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      isShown : this.isThermalTesting,
      routing : "thermal-expansion-dilatometer-up-to-1000degc",
    },
    {
      service_id: 7,
      img: '../../assets/service7.png',
      header : 'Sophisticated Instruments',
      heading : 'BET Analysis',
      description : 'It is a physical characterization technique that provides quantitative data on the specific surface area and porosity distribution of solid materials.',
      students : '₹2500 - Students',
      industries : '₹4000 - Industries',
      isShown : this.isSophisticated,
      routing : "bet-analysis",
    },
    {
      service_id: 8,
      img: '../../assets/service8.png',
      header : 'Sophisticated Instruments',
      heading : 'Pin On Disc Tribometer (Wear)',
      description : 'It is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.',
      students : '₹1000 - Students',
      industries : '₹1500 - Industries',
      isShown : this.isSophisticated,
      routing : "pin-on-disc-tribometer-wear",
    },
    {
      service_id: 9,
      img: '../../assets/service9.jpg',
      header : 'Material preparation',
      heading : ' Planetary Mill with TC Balls & Vial per hour',
      description : 'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      students : '₹300 - Students',
      industries : '₹600 - Industries',
      isShown : this.isMaterialPreparation,
      routing : "planetary-mill-with-tungsten-carbide-balls",
    },
    {
      service_id: 10,
      img: '../../assets/service10.jpg',
      header : 'Shaping',
      heading : 'Pellet Press (10 tone)',
      description : 'It is a kind of machine that is used for producing pellets from powdered biomass material.',
      students : '₹200 - Students',
      industries : '₹500 - Industries',
      isShown : this.isShaping,
      routing : "pellet-press-10-tone",
    },
    {
      service_id: 11,
      img: '../../assets/service11.png',
      header : 'Heat Treatment Facility',
      heading : 'Box Furnace - up to 1200°C (5°C ramp & 3hrs dwell)',
      description : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students : '₹2000 - Students',
      industries : '₹3000 - Industries',
      isShown : this.isHeatTreatment,
      routing : "box-furnace-up-to-1200degc"
    },
    {
      service_id: 12,
      img: '../../assets/service12.png',
      header : 'Heat Treatment Facility',
      heading : 'Box Furnace - up to 1400°C (5°C ramp & 3hrs dwell)',
      description : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      isShown : this.isHeatTreatment,
      routing : "box-furnace-up-to-1400degc",
    },
    {
      service_id: 13,
      img: '../../assets/service13.png',
      header : 'Heat Treatment Facility',
      heading : 'Box Furnace - up to 1600°C (5°C ramp & 3hrs dwell)',
      description : 'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      isShown : this.isHeatTreatment,
      routing : "box-furnace-up-to-1600degc"
    },
    {
      service_id: 14,
      img: '../../assets/service14.jpg',
      header : 'Heat Treatment Facility',
      heading : 'Tubular Furnace with Cont. atm. 1200°C with Cold Vacuum & Argon Purging',
      description : 'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.',
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      isShown : this.isHeatTreatment,
      routing : "tubular-furnace-with-controlled-atmosphere-1200degc"
    },
    {
      service_id: 15,
      img: '../../assets/service15.jpg',
      header : 'Heat Treatment Facility',
      heading : ' Tubular Furnace with Cont. atm. 1600°C with Cold Vacuum & Argon Purging',
      description : 'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.',
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      isShown : this.isHeatTreatment,
      routing : "tubular-furnace-with-controlled-atmosphere-1600degc"
    },
    {
      service_id: 16,
      img: '../../assets/service16.jpg',
      header : 'Heat Treatment Facility',
      heading : 'Microwave Furnace up to 1500°C (20°C ramp & 30 min dwell)',
      description : 'Microwave furnaces represent a system that combines free radiating heating elements with a microwave field.',
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      isShown : this.isHeatTreatment,
      routing : "microwave-furnace-up-to-1500degc",
    },
    {
      service_id: 17,
      img: '../../assets/service17.jpg',
      header : 'Nano coating techniques',
      heading : 'Spin Coating',
      description : 'A method where an excess amount of a solution is placed on the substrate, which is then rotated at high speed in order to spread the fluid by centrifugal force.',
      students : '₹400 - Students',
      industries : '₹800 - Industries',
      isShown : this.isNanoCoating,
      routing : "spin-coating",
    },
    {
      service_id: 18,
      img: '../../assets/service18.jpg',
      header : 'Nano coating techniques',
      heading : ' Spray Pyrolysis',
      description : 'A process in which a thin film is deposited by spraying a solution on a heated surface, where the constituents react to form a chemical compound.ndustries and Students XRD Analysis for Industries and Students  .',
      students : '₹1000 - Students',
      industries : '3000 - Industries',
      isShown : this.isNanoCoating,
      routing : "spray-pyrolysis",
    },
    {
      service_id: 19,
      img: '../../assets/service19.jpg',
      header : 'Nano coating techniques',
      heading : 'Dip Coating',
      description : 'An industrial coating process which is used, for example, to manufacture bulk products such as coated fabrics and specialised coatings for example in the biomedical field.',
      students : '₹250 - Students',
      industries : '₹500 - Industries',
      isShown : this.isNanoCoating,
      routing : "dip-coating",
    },
    {
      service_id: 20,
      img: '../../assets/service20.jpg',
      header : 'Physical properties',
      heading : 'Cold Fired MOR (maximum 3 samples)',
      description : 'Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.',
      students : '₹1500 - Students',
      industries : '₹3000 - Industries',
      isShown : this.isPhysicalProperties,
      routing : "cold-fired-mor-modulus-of-rupture-flexural-strength",
    },
    {
      service_id: 21,
      img: '../../assets/service21.jpg',
      header : 'Casting',
      heading : 'Aluminium Stir Casting',
      description : 'It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.',
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      isShown : this.isCasting,
      routing : "aluminium-stir-casting",
    },
    {
      service_id: 22,
      img: '../../assets/service22.jpg',
      header : 'Casting',
      heading : 'Magnesium Stir Casting',
      description : 'It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.',
      students : '₹4000 - Students',
      industries : '₹6000 - Industries',
      isShown : this.isCasting,
      routing : "magnesium-stir-casting",
    },
    {
      service_id: 23,
      img: '../../assets/service23.jpg',
      header : 'Shaping',
      heading : 'Extruder',
      description : 'Extruders are screw reactors, and extrusion is a series of processes which includes mixing, forming, puffing and drying.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isShaping,
      routing : "extruder",
    },
    {
      service_id: 24,
      img: '../../assets/service24.jpg',
      header : 'Nano coating techniques',
      heading : 'Chemical Vapour Deposition (CVD)',
      description : 'A technique where a solid material is deposited from a vapor by some chemical reaction occurring on or in the vicinity of a normally heated substrate surface.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isNanoCoating,
      routing : "chemical-vapour-deposition-cvd",
    },
    {
      service_id: 25,
      img: '../../assets/service25.jpg',
      header : 'Casting',
      heading : ' Slip Casting',
      description : 'A technique used for the production of complex shapes from a suspension poured into a mold.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isCasting,
      routing : "slip-casting",
    },
    {
      service_id: 26,
      img: '../../assets/service26.png',
      header : 'Material preparation',
      heading : 'Sol Gel Route',
      description : 'A method for producing solid materials from small molecules.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isMaterialPreparation,
      routing : "sol-gel-route"
    },
    {
      service_id: 27,
      img: '../../assets/service27.jpg',
      header : 'Material preparation',
      heading : 'Planetary Ball Mill with Alumina Jar(500ml)',
      description : 'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isMaterialPreparation,
      routing : "planetary-ball-mill-with-alumina-jar-500ml"
    },
    {
      service_id: 28,
      img: '../../assets/service28.jpg',
      header : 'Material preparation',
      heading : 'Jar Mill (5 litre)',
      description : 'Jar Mills are used for wet or dry grinding, mixing and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isMaterialPreparation,
      routing : "jar-mill",
    },
    {
      service_id: 29,
      img: '../../assets/gloveBox.png',
      header : 'Material preparation',
      heading : 'Glove Box',
      description : 'A glovebox is a sealed container that is designed to allow one to manipulate objects where a separate atmosphere is desired.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isMaterialPreparation,
      routing : "glove-box",
    },
    {
      service_id: 30,
      img: '../../assets/service30.jpg',
      header : 'Material preparation',
      heading : 'Planetary Ball Mill with Porcelain Jar(500ml)',
      description : 'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isMaterialPreparation,
      routing : "planetary-ball-mill-with-porcelain-jar-500ml",
    },
    {
      service_id: 31,
      img: '../../assets/service31.png',
      header : 'Physical properties',
      heading : 'Bulk Density, Porosity, Water Absorption',
      description : 'Finding Bulk Density, Porosity, Water absorption of samples for Industries and Students ',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isPhysicalProperties,
      routing : "bulk-density-porosity-water-absorption-fired-shrinkage",
    },
    {
      service_id: 32,
      img: '../../assets/service32.png',
      header : 'Physical properties',
      heading : 'Particle Size Distribution',
      description : 'It indicates the percentage of particles of a certain size (or in a certain size interval). These intervals are also called size classes or fractions.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isPhysicalProperties,
      routing : "particle-size-distribution",
    },
    {
      service_id: 33,
      img: '../../assets/service33.jpg',
      header : 'Physical properties',
      heading : 'Cold Crushing Strength (CSS)',
      description : 'The Cold Crushing Strength (CCS) represents the ability of a product to resist failure under compressive load at room temperature.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isPhysicalProperties,
      routing : "cold-crushing-strength-css",
    },
    {
      service_id: 34,
      img: '../../assets/service34.png',
      header : 'Physical properties',
      heading : 'Impact Resistance',
      description : "Impact resistance describes a material's or a product's ability to absorb shock or impact energy without breaking.",
      industries : '₹ - Enquire for Estimate',
      isShown : this.isPhysicalProperties,
      routing : "impact-resistance",
    },
    {
      service_id: 35,
      img: '../../assets/service35.png',
      header : 'Physical properties',
      heading : 'Abrasion Resistance',
      description : 'Abrasion resistance refers to the ability of materials and structures to withstand abrasion.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isPhysicalProperties,
      routing : "abrasion-resistance",
    },
    {
      service_id: 36,
      img: '../../assets/service36.jpg',
      header : 'Thermal testing',
      heading : 'Creep Resistance',
      description : 'The ability of the material to resist any kind of distortion when subjected to prolonged compressive load over an extended period of time.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "creep-resistance",
    },
    {
      service_id: 37,
      img: '../../assets/service37.jpg',
      header : 'Thermal testing',
      heading : 'Hot Modulus Of Rupture (HMOR)',
      description :"It is the material's ability to resist deformation under load with Constant Temperature.",
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "hot-modulus-of-rupture-hmor",
    },
    {
      service_id: 38,
      img: '../../assets/service38.png',
      header : 'Thermal testing',
      heading : 'Thermal Conductivity',
      description : 'It refers to the ability of a given material to conduct or transfer heat.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "thermal-conductivity"
    },
    {
      service_id: 39,
      img: '../../assets/service39.png',
      header : 'Thermal testing',
      heading : 'Permanent Linear Charge (PLC)',
      description : 'It is a factor used to judge the suitability of refractories in ranges of temperature limits.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "permanent-linear-change-plc",
    },
    {
      service_id: 40,
      img: '../../assets/service40.jpg',
      header : 'Thermal testing',
      heading : 'Refractory Under Load (RUL)',
      description : 'It is a measure of the deformation behaviour of refractory ceramic products exposed to a constant load and increasing temperature.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "refractory-under-load-rul"
    },
    {
      service_id: 41,
      img: '../../assets/service41.jpg',
      header : 'Thermal testing',
      heading : 'Pyrometric Cone Equivalent (PCE)',
      description : 'Used to determine the Cone equivalent of an unknown raw material by placing several different PCE cones alongside an unknown raw material (that has been pressed into the same shape as a cone).',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "pyrometric-cone-equivalent-pce",
    },
    {
      service_id: 42,
      img: '../../assets/service42.jpg',
      header : 'Thermal testing',
      heading : 'Thermal Cycling',
      description : 'It is defined as any recursive thermal test in which the temperature is regularly altered, touching a high-temperature peak and a low-temperature peak.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "thermal-cycling"
    },
    {
      service_id: 43,
      img: '../../assets/service43.jpg',
      header : 'Thermal testing',
      heading : 'Slag Testing',
      description : 'It is the wear and tear of refractories caused by static chemical attack of slag.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "slag-testing",
    },
    {
      service_id: 44,
      img: '../../assets/service44.png',
      header : 'Thermal testing',
      heading : 'Sieve Analysis',
      description : 'It is a method that is used to determine the grain size distribution of soils that are greater than 0.075 mm in diameter.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "sieve-analysis",
    },
    {
      service_id: 45,
      img: '../../assets/service45.jpg',
      header : 'Thermal testing',
      heading : 'Thermal Shock Resistance',
      description : 'It is the ability of a solid to withstand sudden changes in temperature either during heating or cooling.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isThermalTesting,
      routing : "thermal-shock-resistance",
    },
    {
      service_id: 46,
      img: '../../assets/service46.jpg',
      header : 'Raw materials',
      heading : 'Ball Clay',
      description : 'Ball clays are fine-grained, highly plastic clays.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "ball-clay",
    },
    {
      service_id: 47,
      img: '../../assets/service47.jpg',
      header : 'Raw materials',
      heading : 'China Clay',
      description : 'China clay, soft white clay that is an essential ingredient in the manufacture of China and porcelain.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "china-clay",
    },
    {
      service_id: 48,
      img: '../../assets/service48.jpg',
      header : 'Raw materials',
      heading : 'Than Clay',
      description : 'Than fire clay is a range of refractory clays used in the manufacture of ceramics, especially fire brick.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "than-clay",
    },
    {
      service_id: 49,
      img: '../../assets/service49.jpg',
      header : 'Raw materials',
      heading : 'Feldspar',
      description : 'Feldspar is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "feldspar",
    },
    {
      service_id: 50,
      img: '../../assets/service50.jpg',
      header : 'Raw materials',
      heading : 'Quartz',
      description : 'Quartz is a hard, crystalline mineral composed of silica (silicon dioxide).',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "quartz",
    },
    {
      service_id: 51,
      img: '../../assets/service51.jpg',
      header : 'Raw materials',
      heading : 'Alumina',
      description : 'Alumina is the most widely used oxide ceramic material. Its applications are widespread, and include spark plugs, tap washers, abrasion resistant tiles, and cutting tools.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "alumina",
    },
    {
      service_id: 52,
      img: '../../assets/service52.jpg',
      header : 'Raw materials',
      heading : 'Zirconia',
      description : "Zirconia is a white solid ceramic glaze and one of several newer materials that combine metal's strength with the aesthetic, tooth-like appeal of porcelain.",
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "zirconia",
    },
    {
      service_id: 53,
      img: '../../assets/service53.png',
      header : 'Raw materials',
      heading : 'Silicon Carbide',
      description : 'Silicon carbide, also known as carborundum, is a hard chemical compound containing silicon and carbon.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isRawMaterials,
      routing : "silicon-carbide",
    },
    {
      service_id: 54,
      img: '../../assets/service54.jpg',
      header : 'heat treatment facility',
      heading : 'Hot Air Oven',
      description : 'Hot air ovens are electrical devices which use dry heat to sterilize.',
      industries : '₹ - Enquire for Estimate',
      isShown : this.isHeatTreatment,
      routing : "hot-air-oven",
    }
  ];

  onKeyUp(event: any): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredList.filter = filterValue;
    if(filterValue == ''){
			this.filteredList.filteredData = this.filteredList.data;
		}
    const allFiltered = this.filteredList.filteredData.filter((e: any) => {
			return (e.header.toLowerCase().includes(filterValue) || e.heading.toLowerCase().includes(filterValue));
		});
		this.filteredList.filteredData = allFiltered;
    console.log(this.filteredList.filteredData);
  }

  currentImageIndex = 0;
  images = [
    '../../assets/dropdown.svg',
    '../../assets/cancel.svg',
  ];

  showMenu: boolean = false;
  changeImage() {
    this.isFilter = !this.isFilter;
    console.log(this.isFilter);
    if(this.isFilter){
      document.getElementById('all').classList.add('green');
      document.getElementById('allText').classList.add('white');
      this.removeClasses();
      this.mainArray = [this.service];
    }
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    let menu = document.querySelector(".menu");
    if (!this.showMenu) {
      menu.classList.add("show");
      // Reset the menu state
      this.showMenu = true;
    } else {
      menu.classList.remove("show");
      // Reset the menu state
      this.showMenu = false;
    }
  }

  async filter(event,e){
    if(event !=="All"){
      const x = this.mainArray.length ? this.mainArray[0].length:this.mainArray.length;
      if(x==54){
        this.mainArray=[];
      }
      if(document.getElementById('all').classList.contains('green')) {
        document.getElementById('all').classList.remove('green');
      document.getElementById('allText').classList.remove('white');
      }

      const allFiltered = this.service.filter((e: any) => {
        return (e.header.toLowerCase().includes(event.toLowerCase()));
      });
      const boolValue = allFiltered.some((x)=>x.isShown ===false);
      if(boolValue){
        // const clickedElement = e.target.id;
        // const button = document.getElementById(clickedElement);
        // button.style.backgroundColor = "green";

        await this.mainArray.push(allFiltered);
        console.log(this.mainArray)

        await allFiltered.forEach((x)=>x.isShown = true);

      } else {
        // const clickedElement = e.target.id;
        // const button = document.getElementById(clickedElement);
        // button.style.backgroundColor = "white";

        for (let i = this.mainArray.length - 1; i >= 0; i--) {
          let childArray = this.mainArray[i];
          if (allFiltered.every(value => childArray.includes(value))) {
            this.mainArray.splice(i, 1);
          }
        }
        console.log(this.mainArray);
        if(!document.getElementById('all').classList.contains('green') && this.mainArray.length==0) {
          document.getElementById('all').classList.add('green');
      document.getElementById('allText').classList.add('white');
        }
        await allFiltered.forEach((x)=>x.isShown = false);
      }
    } else{
      // document.getElementById('all').classList.add('green');
      // document.getElementById('allText').classList.add('white');

      this.isAllServices = false;
      this.isRawMaterials = false;
      this.isMaterialPreparation = false;
      this.isSophisticated = false;
      this.isPhysicalProperties = false;
      this.isThermalTesting = false;
      this.isHeatTreatment = false;
      this.isShaping = false;
      this.isNanoCoating = false;
      this.isCasting = false;
      this.removeClasses();
      this.mainArray = [this.service];
      // const clickedElement = e.target.id;
      // const button = document.getElementById(clickedElement);
      //  button.style.backgroundColor = "green";
      console.log(this.mainArray);
      this.service.forEach((x)=>x.isShown = false);
    }
  }
  removeClasses(){
    document.getElementById('material').classList.remove('green');
      document.getElementById('materialText').classList.remove('white');
      document.getElementById('Sophisticated').classList.remove('green');
      document.getElementById('SophisticatedText').classList.remove('white');
      document.getElementById('physical').classList.remove('green');
      document.getElementById('physicalText').classList.remove('white');
      document.getElementById('thermal').classList.remove('green');
      document.getElementById('thermalText').classList.remove('white');
      document.getElementById('heat').classList.remove('green');
      document.getElementById('heatText').classList.remove('white');
      document.getElementById('shaping').classList.remove('green');
      document.getElementById('shapingText').classList.remove('white');
      document.getElementById('nano').classList.remove('green');
      document.getElementById('nanoText').classList.remove('white');
      document.getElementById('casting').classList.remove('green');
      document.getElementById('castingText').classList.remove('white');
  }

 
  all() {
    this.isAllServices = !this.isAllServices ? true: false;
    if(this.isAllServices) {
      document.getElementById('all').classList.add('green');
      document.getElementById('allText').classList.add('white');
    } else {
      document.getElementById('all').classList.remove('green');
      document.getElementById('allText').classList.remove('white');
    }
  }
  rawMaterial() {
    this.isRawMaterials = !this.isRawMaterials ? true: false;
    if(this.isRawMaterials) {
      document.getElementById('rawMaterial').classList.add('green');
      document.getElementById('rawMaterialText').classList.add('white');
    } else {
      document.getElementById('rawMaterial').classList.remove('green');
      document.getElementById('rawMaterialText').classList.remove('white');
    }
  }

  material() {
    this.isMaterialPreparation = !this.isMaterialPreparation ? true: false;
    if(this.isMaterialPreparation) {
      document.getElementById('material').classList.add('green');
      document.getElementById('materialText').classList.add('white');
    } else {
      document.getElementById('material').classList.remove('green');
      document.getElementById('materialText').classList.remove('white');
    }
  }
  Sophisticated() {
    this.isSophisticated = !this.isSophisticated ? true: false;
    if(this.isSophisticated) {
      document.getElementById('Sophisticated').classList.add('green');
      document.getElementById('SophisticatedText').classList.add('white');
    } else {
      document.getElementById('Sophisticated').classList.remove('green');
      document.getElementById('SophisticatedText').classList.remove('white');
    }
  }
  physical() {
    this.isPhysicalProperties = !this.isPhysicalProperties ? true: false;
    if(this.isPhysicalProperties) {
      document.getElementById('physical').classList.add('green');
      document.getElementById('physicalText').classList.add('white');
    } else {
      document.getElementById('physical').classList.remove('green');
      document.getElementById('physicalText').classList.remove('white');
    }
  }
  thermal() {
    this.isThermalTesting = !this.isThermalTesting ? true: false;
    if(this.isThermalTesting) {
      document.getElementById('thermal').classList.add('green');
      document.getElementById('thermalText').classList.add('white');
    } else {
      document.getElementById('thermal').classList.remove('green');
      document.getElementById('thermalText').classList.remove('white');
    }
  }
  heat() {
    this.isHeatTreatment = !this.isHeatTreatment ? true: false;
    if(this.isHeatTreatment) {
      document.getElementById('heat').classList.add('green');
      document.getElementById('heatText').classList.add('white');
    } else {
      document.getElementById('heat').classList.remove('green');
      document.getElementById('heatText').classList.remove('white');
    }
  }
  shaping() {
    this.isShaping = !this.isShaping ? true: false;
    if(this.isShaping) {
      document.getElementById('shaping').classList.add('green');
      document.getElementById('shapingText').classList.add('white');
    } else {
      document.getElementById('shaping').classList.remove('green');
      document.getElementById('shapingText').classList.remove('white');
    }
  }
  nano() {
    this.isNanoCoating = !this.isNanoCoating ? true: false;
    if(this.isNanoCoating) {
      document.getElementById('nano').classList.add('green');
      document.getElementById('nanoText').classList.add('white'); 
    } else {
      document.getElementById('nano').classList.remove('green');
      document.getElementById('nanoText').classList.remove('white');
    }
  }
  casting() {
    this.isCasting = !this.isCasting ? true: false;
    if(this.isCasting) {
      document.getElementById('casting').classList.add('green');
      document.getElementById('castingText').classList.add('white');
    } else {
      document.getElementById('casting').classList.remove('green');
      document.getElementById('castingText').classList.remove('white');
    }
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

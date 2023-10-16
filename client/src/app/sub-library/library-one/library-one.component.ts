import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-library-one',
  templateUrl: './library-one.component.html',
  styleUrls: ['./library-one.component.css']
})

export class LibraryOneComponent {
  
  
  currentImageIndex15 = 0;
  imagesNav=[
    './assets/images/menu_own.svg',
    './assets/images/icons8-close.svg',
  ]
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  contentParams : any;
  id : any;
  heading : any
  img : any
  subHeading : any
  subHeading2 : any
  subHeading3 : any
  subHeading4 : any
  subHeading5 : any
  subHeading6 : any
  desc : any
  desc1 : any
  desc2 : any
  desc3 : any
  desc4 : any
  desc5 : any
  desc6 : any
  summary:any
  point1:any
  point2:any
  point3:any
  point4:any
  point5:any
  point6:any
  point7:any
  point8:any
  point9:any
  point11:any
  point12:any
  point13:any
  point14:any

  ngDoCheck(){
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    console.log(this.contentParams);
    this.filterMethod();
  }

  ngOnInit(): void {
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    console.log(this.contentParams)
    this.filterMethod(); 
  }

  filterMethod(){
    const filteredData = this.content.filter((x)=>x.routing == this.contentParams);
    this.id = filteredData[0].id;
    this.heading = filteredData[0].heading;
    this.img = filteredData[0].img;
    this.subHeading = filteredData[0].subHeading;
    this.subHeading2 = filteredData[0].subHeading2;
    this.subHeading3 = filteredData[0].subHeading3;
    this.subHeading4 = filteredData[0].subHeading4;
    this.subHeading5 = filteredData[0].subHeading5;
    this.subHeading6 = filteredData[0].subHeading6;
    this.desc1 = filteredData[0].desc1;
    this.desc2 = filteredData[0].desc2;
    this.desc3 = filteredData[0].desc3;
    this.desc4 = filteredData[0].desc4;
    this.desc5 = filteredData[0].desc5;
    this.desc6 = filteredData[0].desc6;
    this.point1 = filteredData[0].point1;
    this.point2 = filteredData[0].point2;
    this.point3 = filteredData[0].point3;
    this.point4 = filteredData[0].point4;
    this.point5 = filteredData[0].point5;
    this.point6 = filteredData[0].point6;
    this.point7 = filteredData[0].point7;
    this.point8 = filteredData[0].point8;
    this.point9 = filteredData[0].point9;
    this.point11 = filteredData[0].point11;
    this.point12 = filteredData[0].point12;
    this.point13 = filteredData[0].point13;
    this.point14 = filteredData[0].point14;
    this.summary = filteredData[0].summary;
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
      routing : "agate-importance",
      heading: 'Agate and It’s Importance',
      img: './assets/images/article2.jpeg',
      subHeading : 'Agate: Unveiling Its Industrial Significance and Versatile Applications',
      desc1:"Agate, a captivating gemstone valued for its colorful bands and distinct patterns, goes beyond just its visual charm to play a vital part in numerous industries. With its exceptional traits and adaptable features, agate has secured its place in various industrial applications, contributing to innovation and practicality in a range of sectors. Let's dive into the intriguing realm of agate and explore its significance in diverse industries.",
      point1:"Jewellery and Accessories : The captivating patterns and vibrant shades of agate have led to its desirability in the world of jewellery. When shaped into beads, cabochons, and pendants, agate takes on a central role in creating exquisite necklaces, earrings, and bracelets. The inherent beauty and versatile color palette provide endless design opportunities to cater to the preferences of discerning customers.",
      point2:"Lapidary Artistry : Skilled artisans and experts in lapidary work transform raw agate into intricate sculptures, carvings, and decorative pieces. The layers and patterns within agate serve as an inspiration for imaginative craftsmanship, yielding creations that are both visually captivating and culturally meaningful.",
      point3:"Interior Design and Décor : The mesmerizing patterns found in agate make it a favored choice for interior designers and decorators. Agate slices are converted into elegant tabletops, wall panels, and decorative accents. Incorporating agate into interior designs introduces an air of sophistication and a distinctive, nature-inspired aesthetic.",
      point4:"Semi-Precious Inlay : Agate is frequently employed as an inlay material, enhancing the appeal of furniture, flooring, and architectural elements. Its inherent patterns, when thoughtfully arranged, yield striking visual effects that contribute value to premium products and design concepts.",
      point5:"Artistic Expressions : The intricate bands and vibrant colors of agate find their way into artistic endeavors like paintings, sculptures, and mixed-media works. Serving as a wellspring of inspiration, agate's elegance sparks the creative imagination of artists, infusing their creations with the grace of the natural world.",
      point6:"Horology and Timekeeping : The durability and hardness of agate make it an optimal choice for crafting watch dials and decorative components in luxury timepieces. Its capacity to withstand wear and maintain its aesthetic allure renders it a favored material for horological craftsmanship.",
      point7:"Home Accessories : Agate is transformed into a range of home accessories, including coasters, candle holders, and decorative bowls. Its inherent patterns introduce a touch of refinement to everyday items, transforming them into functional pieces of artistry.",
      point8:"Specialized Craftsmanship : Agate finds a place in specialized craftsmanship techniques such as intarsia, involving the incorporation of segments from different materials to create intricate mosaics. Here, agate contributes to the formation of visually arresting and intricately detailed designs.",
      point9:"Healing and Metaphysical Products : Within holistic practices, agate is believed to possess healing properties. Its utilization in crafting metaphysical products such as crystal grids, meditation tools, and energy-enhancing items underscores its role within wellness-focused sectors.",
      point11:"Architectural Elements : Agate's entrancing appearance extends to architectural contexts. It is harnessed in premium interior and exterior designs, introducing an element of opulence to spaces through applications like wall panels, countertops, and decorative accents.",
      summary:"In summary, agate's flexibility and innate allure position it as an indispensable asset across diverse industries. From adorning jewelry to enriching interior aesthetics, agate's presence infuses elegance, individuality, and a connection to the natural world. Its significance in industrial contexts not only highlights its aesthetic magnetism but also underscores its pragmatic value as a substance that augments functionality, beauty, and ingenuity."
    },
    { 
      id : 2,
      routing : "quartz-interesting-facts",
      heading: 'Quartz - Interesting Facts',
      img: './assets/images/article1.jpeg',
      subHeading : "Unveiling the Enigmatic Beauty : Exploring Fascinating Facts about Quartz",
      desc1:"Quartz, a gem of the Earth's treasury, is a mineral that has captivated humans for centuries with its mesmerizing appearance, diverse forms, and intriguing properties. Let's embark on a journey to discover some lesser-known and enthralling facts about this extraordinary mineral.",
      point1:"Abundance in Diversity : Quartz reigns as one of the most abundant minerals on the planet, composing a significant portion of the Earth's crust. Its diverse forms and breath taking colours, ranging from the transparent purity of rock crystal to the soothing lavender shades of amethyst, showcase nature's artistic flair.",
      point2:"Etymology of Elegance : The word 'quartz' derives from the German term 'quarz,' which originated from the Slavic word 'tvrdy,' meaning 'hard.' This etymological journey perfectly captures quartz's defining attribute – its exceptional hardness, a quality that ranks it at number 7 on the Mohs scale of mineral hardness.",
      point3:"Ancient Crystal Marvels : Quartz crystals are ancient marvels that have witnessed the passage of time. These crystals form deep within the Earth's crust, developing over millions of years through a process of slow and precise growth. Each crystal tells a geological story that spans epochs.",
      point4:"Piezoelectric Power : Quartz's unique property of piezoelectricity is a phenomenon where mechanical pressure applied to the crystal generates an electric charge, and vice versa. This remarkable quality has found applications in various fields, from igniting sparks in cigarette lighters to the sensitive microbalances in scientific instruments.",
      point5:"Time's Everlasting Guardian : Modern technology owes a debt of gratitude to quartz for revolutionizing timekeeping. The advent of quartz watches in the 1960s transformed horology. These watches utilize the consistent vibrations of a quartz crystal to maintain unwavering accuracy in tracking time, rendering them as reliable guardians of moments.",
      point6:"Vibrant Guardians of Serenity : Quartz varieties like amethyst and clear quartz have been revered for their metaphysical attributes since ancient times. Amethyst is often associated with tranquillity and spiritual clarity, while clear quartz is believed to amplify energy and facilitate meditation.",
      point7:"Crystalline Healers : Crystal healing enthusiasts place quartz crystals on the body to promote holistic well-being. While scientific backing is limited, proponents believe that quartz's energy can stimulate healing and balance in the body and mind.",
      point8:"Earth's Geological Chronicler : Quartz holds the Earth's geothermal history within its crystalline structure. By studying quartz deposits, geologists can unravel the mysteries of the planet's past temperatures, pressures, and geological events.",
      point9:"Elemental Silicon Symphony : Quartz's composition involves silicon and oxygen atoms arranged in a symphony of molecular harmony. Silicon, a vital component of quartz, plays a pivotal role in modern electronics, serving as the foundation of semiconductors powering our digital world.",
      point11:"Lapidary Artistry : Artisans around the world treasure quartz's captivating colours and patterns. They transform raw quartz into exquisite jewellery, sculptures, and ornamental pieces through the art of lapidary, allowing the mineral's innate beauty to shine.",
      summary:"In conclusion, quartz is more than just a mineral; it's a testament to the Earth's artistic ingenuity and geological marvels. From its captivating forms and hues to its influential role in technology and ancient beliefs, quartz beckons us to delve deeper into its enchanting realm and appreciate the intricate wonders it holds."
    },
    {
      id : 3,
      routing : 'graphite-impact-in-industries',
      heading: "Graphite’s Impact in Industries",
      img: './assets/images/article3.jpeg',
      subHeading : "Graphite : A Catalyst for Transformation Across Varied Industries",
      desc1:"Graphite, an unassuming yet highly potent form of carbon, emerges as a mineral that has dynamically reformed multiple industries through its remarkable attributes and diverse applications. From its pivotal contributions to technological advancements to its role in energy storage and beyond, graphite wields a profound and pervasive influence. Let's embark on a journey into the realm of graphite, uncovering how it shapes and propels innovation across a spectrum of sectors.",
      point1:"Industrial Metallurgy : Graphite's elevated melting point, outstanding thermal conductivity, and resistance to chemical reactions render it an indispensable asset in metallurgical processes. Its utility as a crucible material for melting and casting metals such as steel, iron, and non-ferrous alloys bolsters essential manufacturing procedures. Its capacity to endure extreme temperatures assures the efficacy and excellence of these pivotal production processes.",
      point2:"Batteries and Energy Storage : The ascent of electric vehicles and renewable energy sources has thrust graphite into the spotlight. Graphite occupies a pivotal role in lithium-ion batteries, functioning as the anode material that harbors and dispenses energy during charging and discharging cycles. Its capability to intercalate lithium ions facilitates efficient energy storage, contributing significantly to the sustainable energy transition.",
      point3:"Mechanical and Industrial Applications : Graphite's self-lubricating qualities and low friction characteristics designate it as an optimal material for mechanical functions. It is instrumental in crafting lubricants, greases, and coatings that mitigate wear and friction in machinery, thereby amplifying efficiency and prolonging equipment longevity.",
      point4:"Electronics and Semiconductors : Graphite's exceptional electrical conductivity and adept thermal management attributes emerge as pivotal assets in the electronics sector. It is harnessed in the fabrication of heat sinks, electrical components, and as a substrate for semiconductor devices. Its efficacy in dispersing heat proficiently ensures the apt functionality and durability of electronic apparatus.",
      point5:"Aerospace and Defence : Graphite's lightweight yet robust nature positions it as a prized resource in aerospace and defence applications. It assumes a role in aircraft components, rocket nozzles, and structural materials. Graphite composites provide the requisite strength while minimizing overall weight, a crucial factor in optimizing aerospace technologies.",
      point6:"Refractories and Foundry Industry : Graphite's resistance to elevated temperatures and chemical erosion proves to be a boon in refractory contexts. It is employed to line furnaces, kilns, and crucibles, assuring the containment of intense heat and corrosive agents. Graphite's stability plays a pivotal role in preserving the integrity of vital industrial procedures.",
      point7:"Lubricants and Lubrication Technology : Graphite's innate lubricating traits have steered its integration into diverse lubricant formulations. Its utilization spans from automotive engines to heavy machinery. Lubricants infused with graphite curtail friction, stave off wear, and augment the efficiency of mobile components.",
      point8:"Nuclear Reactors and Energy Generation : Graphite's aptitude to endure high temperatures and radiation exposure confers a noteworthy role in nuclear reactors. It assumes the mantle of a moderator, facilitating the deceleration of neutrons and thus enabling nuclear fission. Additionally, graphite finds purpose in the creation of fuel elements and components for specific reactor variants.",
      point9:"Green Technologies and Sustainability : Graphite's participation in energy storage, lightweight materials, and streamlined manufacturing procedures underscores its significance in fostering greener technologies. Its involvement in renewable energy storage and lightweight materials for transportation aids in curbing carbon footprints and fostering sustainability.",
      point11:"Emerging Frontiers of Innovation : Graphene, a single layer of carbon atoms arranged in a hexagonal framework, originates from graphite and harbours substantial potential across domains such as electronics, materials science, and medical applications. Its remarkable attributes, encompassing elevated electrical conductivity and mechanical robustness, unveil portals to ground breaking innovations that remain largely untapped.",
      summary:"In conclusion, graphite's adaptability and remarkable attributes have propelled it across a multifaceted tapestry of industries, functioning as a catalyst for advancement and innovation. From powering electric vehicles to augmenting aerospace technologies and empowering efficient manufacturing, graphite's imprint continues to shape contemporary society, while its latent potential extends further into territories ripe for exploration and discovery."
    },
    { id : 4,
      routing : "thermal-dynamic-with-precision",
      heading: 'Thermal Dynamics with Precision (Dilatometer)',
      img: './assets/images/article4.jpeg',
      subHeading : "Dilatometer : Thermal Dynamics with Exquisite Precision",
      desc1:"Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
      subHeading2 :"Deciphering Thermal Expansion :",
      desc2:"Central to its purpose, the dilatometer orchestrates the measurement of a material's thermal expansion or contraction amidst shifts in temperature. This phenomenon, recognized as thermal expansion, constitutes the reason behind phenomena like the elongation and contraction of bridges with temperature fluctuations or the discernible warmth felt when holding a sun-exposed metal ruler. The dilatometer deftly captures and quantifies these nuanced dimensional adjustments, rendering an invaluable comprehension of how materials react to thermal stimuli.",
      subHeading3 :"Essential Components and Operational Symphony :",
      desc3:"The anatomy of a conventional dilatometer comprises a receptacle for the sample material and a reference entity that remains steadfast amid temperature oscillations. As the thermal landscape transforms, the dilatometer meticulously gauges alterations in the length or volume of both the sample and reference components. This meticulously amassed data subsequently undergoes meticulous analysis, unearthing details like the coefficient of thermal expansion, phase transitions, and other thermal attributes inherent to the material under scrutiny.",
      subHeading4 :"Vast Canvas of Application:",
      desc4:"The domain of dilatometers traverses a panoramic spectrum of industries and research domains :",
      subHeading5 :"Progressive Pinnacle and Innovation",
      desc5:"Dilatometers continue their evolutionary journey, spurred by technological strides that usher in augmented precision, heightened accuracy, and the capability to scrutinize an expanded array of materials. Automated data compilation and advanced analytical tools further refine the insights harvested from dilatometry endeavours.",
      point1:"Materials Science : Dilatometers constitute an invaluable tool in materials exploration, fostering the formulation of innovative materials boasting specific thermal traits. They serve as custodians of data concerning the comportment of diverse materials, orchestrating informed judgments concerning material choice in engineering endeavours.",
      point2:"Metallurgy : In the metallurgical arena, dilatometers bestow a nuanced understanding of how metals respond to processes of heat treatment. This insight is pivotal in tailoring the characteristics of metals utilized in manufacturing, ensuring the coveted attributes of hardness and dimensional stability.",
      point3:"Ceramics and Glass : The comportment of ceramics and glass materials within the ambit of fluctuating temperatures holds significant sway. Dilatometers yield pivotal data regarding their coefficients of thermal expansion, a facet influencing their deployment in a spectrum spanning from culinary utensils to aerospace constituents.",
      point4:"Pharmaceutical Domain : Dilatometry finds a foothold in pharmaceutical research, casting light upon the thermal attributes of drug compounds and formulations. This intelligence can influence the stability and potency of medications.",
      point5:"Geological Expedition : The geologic vista witnesses the utilization of dilatometry to fathom the expansiveness and contraction of rocks and minerals under diverse temperature circumstances. This comprehension sheds light on geological phenomena and the comportment of substances within Earth's lithic envelope.",
      point6:"Infrastructure and Construction : Dilatometers play a pivotal role in comprehending the behaviour of construction materials such as concrete and asphalt under varying temperature conditions. This knowledge underpins design considerations and assures the longevity of infrastructural edifices.",
      point7:"Realm of Research and Development : Within the precincts of research and development, dilatometers guide the characterization of novel materials, ushering in the creation of products boasting targeted thermal attributes tailored for assorted industries.",
      summary:"In summation, the dilatometer stands as a testament to the intricate choreography between temperature and matter. Its meticulous measurements and exhaustive comprehension of thermal expansion empower industries, researchers, and engineers to traverse the expanse of informed decision-making, innovate with finesse, and unlock the latent potential of materials in a milieu punctuated by the fluctuations of temperature.",

    },
    {
      id : 5,
      routing : 'glove-boxes-for-scientific-advancement',
      heading: 'Glove Boxes for Scientific Advancement',
      img: '../../assets/gloveBox.png',
      subHeading :"Glove Box : Creating Controlled Environments for Scientific Advancement",
      desc1:"A crucial tool stands at the forefront of scientific exploration - the glove box. This innovative device empowers researchers to conduct experiments and handle materials in controlled environments, shielded from external contaminants. Let's delve into the world of glove boxes, understanding their significance, operation, and their indispensable role in various research endeavours.",
      subHeading2:"The Essence of Controlled Environments :",
      desc2:"Glove boxes, also known as controlled atmosphere or isolation chambers, are sealed enclosures designed to maintain specific conditions such as humidity, temperature, and gas composition. These controlled environments are essential when dealing with materials sensitive to air, moisture, or contaminants. In scientific research, maintaining the integrity of experiments and samples is paramount, and glove boxes offer the ideal solution.",
      subHeading3:"Components and Functionality :",
      desc3:"A typical glove box comprises a transparent chamber, often made of acrylic or glass, fitted with gloves that allow researchers to manipulate objects within the enclosure without compromising its controlled environment. The glove box is equipped with gas purification systems, airlocks, and various monitoring instruments to regulate and monitor conditions. Inert gases, such as nitrogen or argon, are often used to displace oxygen and moisture, creating an environment suitable for delicate processes.",
      subHeading4:"Applications Across Research Domains :",
      desc4:"Glove boxes find their applications in a wide range of research disciplines:",
      subHeading5:"Precision and Security in Exploration ",
      desc5:"Beyond conferring controlled environments, glove boxes assume the role of sentinels, ensuring not only the precision but also the safety of researchers. Especially when contending with perilous or toxic materials, these sealed habitats act as barriers, insulating researchers from potential health hazards. Moreover, these orchestrated surroundings amplify the precision and reproducibility of experiments, thereby contributing to the reliability of research outcomes.",
      subHeading6:"Upcoming Frontiers of Innovation ",
      desc6:" A vista of glove box technology encompasses automated frameworks, facilitating remote operation and real-time monitoring. These strides in innovation streamline research protocols and widen the spectrum of plausible applications of glove boxes within avant-garde research pursuits.In summation, glove boxes unfurl as custodians of precision and authenticity within research centers. These constructs craft sanctuaries where sensitive materials are manipulated, guaranteeing the exactitude of experiments and the security of researchers. With their irreplaceable status in multifarious research arenas, glove boxes continue to form the bedrock of scientific progression, presenting a poised stage for breakthroughs and revelations.",
      point1:"Chemistry and Material Science : In the study of air-sensitive compounds, catalysts, and delicate materials, glove boxes prevent reactions with oxygen and moisture. Researchers can perform synthesis, purification, and characterization processes with precision.",
      point2:"Nanotechnology : Glove boxes play a vital role in nanomaterial research, where even slight contamination can alter results. They provide an environment free from airborne particles, ensuring accurate manipulation and analysis of nanoparticles.",
      point3:"Pharmaceutical Research : When working with sensitive drug compounds or sterile preparations, glove boxes prevent contamination and maintain a sterile environment, ensuring the accuracy of pharmaceutical research.",
      point4:"Battery and Energy Research : Glove boxes are used in the development and testing of energy storage devices like batteries and fuel cells. They prevent interactions with moisture and oxygen, allowing researchers to analyze electrochemical processes accurately.",
      point5:"Biotechnology : In cell culture work, where sterility is crucial, glove boxes help maintain a contaminant-free environment. They enable researchers to handle biological samples, tissues, and cell cultures without risking contamination.",
      point6:"Advanced Materials Development : Glove boxes aid in the production and manipulation of advanced materials like superconductors, semiconductors, and optoelectronic devices, where the presence of contaminants can hinder performance.",
      summary:"In summation, glove boxes unfurl as custodians of precision and authenticity within research centers. These constructs craft sanctuaries where sensitive materials are manipulated, guaranteeing the exactitude of experiments and the security of researchers. With their irreplaceable status in multifarious research arenas, glove boxes continue to form the bedrock of scientific progression, presenting a poised stage for breakthroughs and revelations.",
    },
    {
      id : 6,
      routing : "working-principle-of-hot-air-oven",
      heading: 'Working Principle of Hot Air Oven',
      img: './assets/images/article4.jpeg',
      desc1:"The hot air oven, an essential apparatus in laboratories, industries, and research facilities, operates on a fundamental principle that facilitates uniform heating and sterilization of various materials. This versatile tool finds applications in diverse fields, including microbiology, material testing, and food industries. Let's delve into the core of its working principle, exploring how it achieves precise temperature control and its significance in modern-day applications.",
      subHeading2:"The Essence of Hot Air Oven :",
      desc2:"At its core, a hot air oven is designed to provide controlled heating through the circulation of hot air within an enclosed chamber. This uniform distribution of heat ensures that the items placed within the oven experience consistent temperature conditions. The oven's mechanism is based on the principles of convection, making it a reliable tool for drying, curing, and sterilizing purposes.",
      subHeading3:"Components and Mechanism :",
      desc3:"A hot air oven consists of several key components that work in harmony to achieve its functioning :",
      subHeading4:"Working Principle :",
      desc4:"The hot air oven operates on the principle of convection, where heat is transferred through the movement of air. The process can be summarized as follows:",
      subHeading5:"Applications in Various Sectors :",
      desc5:"The hot air oven's working principle finds applications in a wide range of industries :",
      point1:"Heating Element : The oven is equipped with a heating element, usually electric coils or a heating coil, that generates heat when electrical energy is supplied.",
      point2:"Temperature Control System : An integrated temperature control system, often equipped with a thermostat or digital controller, monitors and regulates the oven's internal temperature.",
      point3:"Fan : The presence of a fan ensures efficient circulation of hot air throughout the chamber, promoting even heating.",
      point4:"Insulated Chamber : The chamber is insulated to prevent heat loss and maintain a stable temperature.",
      point5:"Heating : The heating element is activated, generating heat within the oven. The temperature control system maintains the desired set temperature.",
      point6:"Circulation : The fan inside the oven begins to circulate the hot air throughout the chamber. As the air moves, it carries heat energy, creating a consistent temperature environment.",
      point7:"Uniform Heating : Items placed within the oven are surrounded by the circulating hot air, resulting in uniform and thorough heating. This ensures that all parts of the materials or samples experience the same temperature conditions.",
      point8:"Precision : The temperature control system continuously monitors the internal temperature and adjusts the heating element's output to maintain the set temperature accurately.",
      point9:"Microbiology and Research : In laboratories, the hot air oven is used to sterilize equipment, glassware, and lab instruments. The uniform heating ensures the destruction of microorganisms.",
      point11:"Food Industry : Hot air ovens are utilized for drying and dehydrating food products, preserving their quality, flavor, and nutritional value.",
      point12:"Material Testing : Industries employ hot air ovens to determine the effects of heat on different materials, measuring properties like expansion, strength, and thermal stability.",
      point13:"Pharmaceuticals : The oven is used for the drying and sterilization of pharmaceutical products, ensuring their safety and efficacy.",
      point14:"Electronics : Hot air ovens aid in the drying and curing of electronic components, coatings, and adhesives.",
      summary:"In conclusion, the working principle of the hot air oven revolves around convection-based heating, which guarantees uniform temperature distribution for a variety of applications. Its role in laboratories, industries, and research centers underscores its significance in achieving precise, controlled heating and sterilization, contributing to advancements in science, technology, and various sectors.",
    },
  ];
}

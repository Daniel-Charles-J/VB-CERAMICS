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
  img : any
  subHeading : any
  desc1 : any
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

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['libraryOne']
    const filteredData = this.content.filter((x)=>x.id == this.id);
    this.heading = filteredData[0].heading;
    this.img = filteredData[0].img;
    this.subHeading = filteredData[0].subHeading;
    this.desc1 = filteredData[0].desc1;
    this.point1 = filteredData[0].point1;
    this.point2 = filteredData[0].point1;
    this.point3 = filteredData[0].point1;
    this.point4 = filteredData[0].point1;
    this.point5 = filteredData[0].point1;
    this.point6 = filteredData[0].point1;
    this.point7 = filteredData[0].point1;
    this.point8 = filteredData[0].point1;
    this.point9 = filteredData[0].point1;
    this.point11 = filteredData[0].point1;
    this.summary = filteredData[0].summary;
  }

  content = [
    {
      id : 1,
      heading: 'Agate and It’s Importance',
      img: './assets/images/article1.jpeg',
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
      heading: 'Quartz - Interesting Facts',
      img: './assets/images/article2.jpeg',
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
      heading: "Graphite's Impact in Industries",
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
    {
      id : 4,
      heading: '',
      img: './assets/images/article4.jpeg',
      subHeading : "",
      desc:""
    },
    {
      id : 5,
      heading: 'Glove Boxes for Scientific Advancement',
      img: './assets/images/article5.jpeg',
      subHeading :"Glove Box : Creating Controlled Environments for Scientific Advancement",
      desc1:"A crucial tool stands at the forefront of scientific exploration - the glove box. This innovative device empowers researchers to conduct experiments and handle materials in controlled environments, shielded from external contaminants. Let's delve into the world of glove boxes, understanding their significance, operation, and their indispensable role in various research endeavours.",
    },
    {
      id : 6,
      heading: '',
      img: './assets/images/article4.jpeg',
      subHeading : "",
      desc:""
    },
  ];
}

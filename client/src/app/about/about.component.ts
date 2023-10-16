import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Set the initial state of the menu
  public showMenu: boolean = false;
  public lastSectionID: string;
  
  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.scrollTo(0, 0);
          }
      })();
    }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      let scrollOffset = 0;
      if (window.innerHeight > 1000) {
        scrollOffset = window.innerHeight * 0.018;
      } else {
        scrollOffset = window.innerHeight * 0.028;
      }
      const elementPosition = element.getBoundingClientRect();
      const scrollToY = elementPosition.top - scrollOffset;
      element.scrollIntoView({ behavior: 'smooth'});
      window.scrollBy(0, scrollToY);
    }
  }

  toggleMenu(): void {
    let menuBtn =
      document.querySelector(".menu-btn");
    let menu =
      document.querySelector(".menu");
    if (!this.showMenu) { 
      menuBtn.classList.add("close");
      menu.classList.add("show");
      window.scrollTo(0, 0);
      // Reset the menu state
      this.showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      // Reset the menu state
      this.showMenu = false;
    }
  }

  zoom(): void {
    var imageId = document.getElementById('fellowship_img');
    imageId.classList.toggle('zoomed');
    
      // var div = document.getElementById('section5_images1');
      // div.classList.add('overlay');
     
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

  open(modalId: string): void {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  close(modalId: string): void {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  public profileContent: string = `Dr.VB Ceramic Research Centre (VBCRC), a division of VB Ceramic Consultants (a leading ceramic Equipment and Instrument manufacturer in India) has been developed to cater to the needs of research and development and quality control in Glass, Ceramics, Nano Science and Material Science.`;
  public profileContent2: string = `Under a single umbrella all the experimental facilities are available throughout the year for the students, researchers and research guides and engineers in colleges, universities and engineers employed in industries.`;
  public profileContent3: string = ` VBCRC offers comprehensive testing of mechanical, physical, chemical and thermal properties of raw materials as well as finished products. Facilities to synthesize and fabricate from laboratory scale to final product stage and to further upgrade to larger scale industrial level are available. Final testing facility including all characterizations is also available to ensure the quality of the finished products.It has a highly competent staff who can solve all problems faced by industries and national labs as well as to offer guidance to students and faculty members.`;
  public visionContent: string = `VB Ceramics, a leading equipment and ceramic manufacturing industry has created VB Ceramic Research center (VBCRC) with the sole aim of promoting high quality research in ceramics and other areas in Materials in the country. VBCRC has been equipped with all high end facilities with a dedicated team of experts which includes a band of senior visiting consultants. It’s objectives are:`;
  public visionContentLi1: string = `To bring about technological up gradation in the processes in the ceramic industry and to serve as a total solution provider.`;
  public visionContentLi2: string = `To focus on research to develop the next generation ceramic processes and products.`;
  public visionContentLi3: string = `To give Guidance and offer all possible experimental facilities to B.E/B.Tech /M.E/M.Sc/ M.Phil students to enable them to carry out their projects.`;
  public visionContentLi4: string = `Offering suggestions and assistance to the faculty members to write Government funded research projects.`;
  public visionContentLi5: string = `Signing MOU with various universities to have Industry, Institution collaboration to perform collaborative research in the mutually accepted fields and to work on combined projects through Government funding.`;
  public visionContentLi6: string = `Center will serve as a common platform to bring linkages between educational institutions with industries, Senior Scientists and consultants and to convert the principles and practices into projects and to finally make them into products of national relevance. Thus to bring MAKE IN INDIA dream into a Reality.`;
  public visionContentLi7: string = `To offer INPLANT training to the students and the workers who can be deputed by various industries to have hands on experience with the instruments in order to improve their quality of work and to update their knowledge with the latest techniques in the respective fields .`;
  public visionContentLi8: string = `To conduct periodical lectures and organize to National and International conferences.`;
  public visionContentLi9: string = `VBCRC will work in MISSION MODE, The Facilities will be available for the students and researchers on all days throughout the year at all times (24X7 HRS) so as to cater to the needs of the student community to complete their high quality projects in record time .`;
  public fellowship: string = `VBCC has signed an MOU with Annamalai University for doing joint research in ceramics and related areas.`;
  public fellowship1: string = `Under this MOU, VBCC is offering a research fellowship to a Ph.D student for doing his Ph.D in Manufacturing Engineering.`;
  public fellowship2: string = `Student Name: Mr. V. Sivamaran`;
  public fellowship3: string = `Project Title: Synthesis of Carbon Nano Tubes (CNTs) by Chemical Vapour Deposition (CVD) Process`;
  public research_papers: string = `Carbon nanotubes, nanorings, andnanospheres: Synthesis and fabrication viachemical vapor deposition—a review`;
  public research_papers1: string = `Ceramics International`;
  public research_papers2: string = `Mullitisation Behaviour of South Indian Clays`;
  public research_papers3: string = `Mullitisation Behaviour of Calcined Clay–Alumina Mixtures`;
  public research_papers4: string = `Effect of MgO, Y2O3 and Boehmite Additives on the Sintering Behaviour of Mullite Formed from Kaolinite-Reactive Alumina`;
  public research_papers5: string = `Mullite from Clay–Reactive Alumina for Insulating Substrate Application`;
  public research_papers6: string = `Influence of the intermixed inter facial layers on the thermal cycling behaviour of atmospheric plasma sprayed lanthanum zirconate based coatings`;
  public research_papers7: string = `Understanding the dry sliding wear behaviour of atmospheric plasma-sprayed rare earth oxide coatings`;
  public research_papers8: string = `Construction of Versatile Advanced Micro Processor based Controller for Spray Pyrolysis Unit and Study of Characterization of Nano Crystalline Tin Oxide (SnO2) ThinFilms`;
  public research_papers9: string = `Effect of chemical vapor deposition parameters on the diameter of multi-walled carbon nanotubes`;
  public research_papers10: string = `In situ synthesis of multi-walled carbon nanorings by catalytic chemical vapor deposition process`;
  public research_papers11: string = `Optimizing Chemical Vapor Deposition Parameters to Attain Minimum Diameter Carbon Nano Tubes by Response Surface Methodology`;
  public research_papers12: string = `Developing Empirical Relationship to Predict the Diameter of Multiwall Carbon Nano Tubes (MWCNTs) Synthesized by Chemical Vapor Deposition (CVD) Process. Manufacturing Technology Today`;
  public research_Projects: string = `Our centre is offering projects for B.E/M.E/M.Sc./M.Phil. students as well as for the research scholars to develop new methodologies to be adopted in the manufacture of more sophisticated equipment's and to promote research in the country in Materials Science and in particular in ceramics. VBCC is an Industrial partner with the following institutions which obtained combined projects.`;
  public research_project_ul1: string = `"Development of Reactive Thermal Plasma Reactor to Synthesis SiAlON and Silicon Nitride Based Ceramics from Fly Ash"`;
  public research_project_cnt1: string = `Dr. V. BALASUBRAMANIAN, M.E., Ph.D. (IITM).,Professor & Coordinator, Department of Manufacturing Engineering, Annamalai University, Annamalai nagar - 608 002, Tamil Nadu.`;
  public research_project_ul2: string = `"Pilot Studies on Microwave Conversion of Eggshell into Nanostructure Hydroxyapatite for Biomedical applications and to design and fabricate continuous flow microwave reactor for scaling up the process"`;
  public research_project_cnt2: string = `Dr. E. K. GIRIJA Assistant Professor, Department of Physics, Periyar University, Salem- 636 011, Tamil Nadu.`;
  public research_project_ul3: string = `"Automation of Nano hydroxyapatite production from eggshell waste using continuous flow microwave reactor suitable for industrial scale production for various biomedical and industrial applications"`;
  public research_project_cnt3: string = `Dr. E. K. GIRIJA Assistant Professor, Department of Physics, Periyar University, Salem- 636 011, Tamil Nadu. Dr. Vivekanand Kattimani, Professor, Department of Oral and Maxillofacial surgery, Department of Physics, Sibar Institute of Dental Sciences, Guntur -09 Andhra Pradesh.`;
  public research_project_ul4: string = `High energy density Batteries from M/S Omega Energy Systems`;
  public academic_activity: string = `VB Ceramics has jointly organized and supported more than 100 National / International Conferences so far. Few of them which have been recently held are mentioned below:`;
  public academic_activity_li1: string = `VBCC jointly Organized a TWO DAY UGC SPONSORED NATIONAL CONFERENCE ON NANOSCIENCE - A Multidisciplinary Approach on 10th & 11th FEBRUARY, 2016 at the Department of Electronics at the Mount Carmel College (Autonomous) Bengaluru.`;
  public academic_activity_li2: string = `VBCC jointly conducted a THIRD INTERNATIONAL WORKSHOP ON ADVANCED FUNCTIONAL NANOMATERIALS (TIWAN-2015) during 16th to 18th December, 2015 at Centre for Nanoscience & Technology, Anna University, Chennai.`;
  public academic_activity_li3: string = `VBCC jointly organized a Three Day International Conference on Advances in Materials, Manufacturing and Applications (AMMA 2015) during April 9th-11th April 2015 at the Department of Metallurgical and Materials Engineering, National Institute of Technology, Tiruchirappalli.`;
 
  ngOnInit(): void {
  }

}

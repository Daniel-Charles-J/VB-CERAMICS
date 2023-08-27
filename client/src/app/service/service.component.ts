import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  filteredList = new MatTableDataSource([]);

  ngOnInit(){
    this.filteredList =new MatTableDataSource(this.service);
  }
  
  service = [
    {
      service_id: 1,
      header : 'Sophisticated Instruments',
      heading : 'X-Ray Diffraction (XRD)',
      description : 'It is a non-destructive method for analysing matters ranging from liquids to crystals.',
      students : '₹750 - Students',
      industries : '₹1500 - Industries',
    },
    {
      service_id: 2,
      header : 'Sophisticated Instruments',
      heading : 'X-Ray Fluorescence (XRF) ',
      description : 'It is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by being bombarded with high-energy X-rays or gamma rays.',
      students : '₹1500 - Students',
      industries : '₹2200 - Industries',
    },
    {
      service_id: 3,
      header : 'Sophisticated Instruments',
      heading : 'Scanning Electron Microscope (SEM)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image',
      students : '₹1000 - Students',
      industries : '₹2000 - Industries',
    },
    {
      service_id: 4,
      header : 'Sophisticated Instruments',
      heading : 'Scanning Electron Microscope (SEM- Gold Sputtering)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The process is done once it’s coated with ultra-thin electrically-conducting metal.',
      students : '₹1250 - Students',
      industries : '₹2500 - Industries',
    },
    {
      service_id: 5,
      header : 'Sophisticated Instruments',
      heading : 'Laser Particle Size Analyzer (PSA)',
      description : 'It is used to measure the sizes of particles in a material. Particle size is calculated by measuring the angle of light scattered by the particles as they pass through a laser beam.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
    },
    {
      service_id: 6,
      header : 'Thermal testing',
      heading : 'Thermal Expansion (Dilatometer up to 1000°C)',
      description : 'A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
    }
  ];

  onKeyUp(event: any): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredList.filter = filterValue;
    if(filterValue == ''){
			this.filteredList.filteredData = this.filteredList.data;
		}
    const allFiltered = this.filteredList.filteredData.filter((e: any) => {
			return (e.header.toLowerCase().includes(filterValue));
		});
		this.filteredList.filteredData = allFiltered;
    console.log(this.filteredList.filteredData);

  }
}

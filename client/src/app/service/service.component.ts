import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
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
    }
  ];
}

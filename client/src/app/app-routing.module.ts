import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';
import { LibraryOneComponent } from './sub-library/library-one/library-one.component';
import { ServicesComponent } from './sub-service/services/services.component';

const appRoutes : Routes = [
  {path : '', component : HomeComponent },
  {path : 'about', component : AboutComponent},
  {path : 'library', component : LibraryComponent},
  { path : 'library/:routing', component : LibraryOneComponent},
  {path : 'gallery', component : GalleryComponent},
  {path : 'service', component : ServiceComponent},
  {path : 'service/:routing', component : ServicesComponent},
  {path : 'contact', component : ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

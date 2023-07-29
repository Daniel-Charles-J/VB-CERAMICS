import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LibraryComponent } from './library/library.component';

const appRoutes : Routes = [
  {path : '', component : HomeComponent },
  {path : 'about', component : AboutComponent},
  {path : 'library', component : LibraryComponent},
  {path : 'gallery', component : GalleryComponent},
  {path : 'service', component : ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LibraryComponent } from './library/library.component';
// import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HomeServiceComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    LibraryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // TooltipsModule,
    MatButtonModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

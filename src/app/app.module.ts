import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { IllustrationsComponent } from './components/illustrations/illustrations.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NgxLoadingXModule } from 'ngx-loading-x';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IllustrationsComponent,
    IllustrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxLoadingXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

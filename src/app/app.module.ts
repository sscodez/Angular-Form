import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import {ProjectService} from './project.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule}from 'angularfire2/firestore'
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    CommonModule ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment),AngularFirestoreModule

  

     // required animations module
  ],
  providers: [ProjectService, HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }

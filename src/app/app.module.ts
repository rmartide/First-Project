import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CarService } from './car.service';
import { CarsComponent } from './cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormCarComponent } from './form-car/form-car.component';

const routes : Routes = [
  {path:'', redirectTo:'cars', pathMatch:'full'},
  {path:'cars', component: CarsComponent},
  {path:'cars/:id', component: CarDetailComponent},
  {path:'new', component: FormCarComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    FormCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

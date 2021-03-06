import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : Car[];  

  constructor(private carService : CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() : void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars; 
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  carsCopy: Car[];
  properties: string[];
  selectedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.carsCopy = cars.slice();
    });
  }

  filterByBrand(brand: string): void {
    this.cars = this.carsCopy.filter(car => car.Brand.toLowerCase().includes(brand.toLowerCase()));
  }

  onSelected(event: MatDatepickerInputEvent<Date>): void {
    this.cars = this.carsCopy.filter(car => this.sameDates(event.value, new Date(car.Registration)));
  }

  sameDates(a: Date, b: Date): Boolean{
    return a.getDay() == b.getDay() && a.getMonth() == b.getMonth() && a.getUTCFullYear() == b.getUTCFullYear();
  }

}

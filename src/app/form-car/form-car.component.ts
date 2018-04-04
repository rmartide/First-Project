import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.css']
})
export class FormCarComponent implements OnInit {

  constructor(private location: Location, private carService: CarService) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

  add(f: NgForm): void{
    let car: Car;
    car = f.value;
    car.Last_updated = new Date();
    car.Created_at = new Date();
    this.carService.addCar(car).subscribe(() => this.goBack());
  }

}

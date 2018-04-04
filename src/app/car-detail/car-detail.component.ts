import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(private aroute: ActivatedRoute, private carService: CarService, private location: Location) {}
  ngOnInit() {
    const id = +this.aroute.snapshot.paramMap.get('id');
    this.getCar(id);
  }

  getCar(id: number){
    this.carService.getCar(id).subscribe(car => this.car = car);
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.carService.updateCar(this.car).subscribe(() => this.goBack());
  }

  delete(){
    this.carService.deleteCar(this.car.id).subscribe(() => this.goBack());
  }

}

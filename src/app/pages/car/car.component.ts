import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[];
  text:string;
 nazife:""
  constructor(private router:Router, private carService:CarService, private activetedRoute:ActivatedRoute){
  }


  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params['id']){
        this.getCarByBrandId(params['id']);
      }
      else{
        this.getCar();
      }
    })
   
  }


  getCar(){
    this.carService.getAllCar().subscribe(res=>{
     // console.log(res);
      this.cars=res;
    })
  }


  tikla(){
    this.router.navigate(['hkn']);
  }

  getCarByBrandId(brandId:number){
    this.carService.getCarByBrand(brandId).subscribe(response=>{
      this.cars=response;
    })

  }

}

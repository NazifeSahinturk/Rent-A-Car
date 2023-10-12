import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private apiUrl = "http://localhost:3000/cars"
  constructor(private http:HttpClient) { }

  getAllCar():Observable<Car[]>{
    let newPath = this.apiUrl
    return this.http.get<Car[]>(newPath)
  }

  getCarByBrand(brandId:number):Observable<Car[]>{
    const url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.http.get<Car[]>(url);
  }
}

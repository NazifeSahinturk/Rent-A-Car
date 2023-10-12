import { Injectable } from '@angular/core';
import { CarsAbstractService } from '../abstract/cars-abstract.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarMockService implements CarsAbstractService{
  
  apiUrl = 'http://localhost:3000/cars';
  
  constructor(private httpClient:HttpClient) { }
   getCarByBrandId(brandId: number): Observable<Car[]> {
    const url =` ${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);
  }




  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }



  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './component/car-list/car.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CarMockService } from './services/concrete/car-mock.service';
import { CarsAbstractService } from './services/abstract/cars-abstract.service';



@NgModule({
  declarations: [
    CarComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  providers: [
    {
      provide: CarsAbstractService,
      useClass: CarMockService,
    },
  ],
  exports:[
    CarComponent
  ]
})
export class CarModule { }

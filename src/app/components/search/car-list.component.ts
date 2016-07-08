import { Component, Input } from '@angular/core';

import { Car } from './car';

@Component({
    moduleId: module.id,
    selector: 'car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
    @Input() cars: Array<Car>;

    goToCar(car:Car) {
        window.open(car.DeepLink);
    }

}
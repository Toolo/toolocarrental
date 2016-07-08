import { CarType } from './car-type';
import { Car } from './car';

export interface SearchResponse {
    Errors: any;
    StatusCode: string;
    StatusDesc: string;
    MetaData?: {
        CarMetaData: {
            CarTypes: Array<CarType>
        }
    };   
    Result?: Array<Car>
} 
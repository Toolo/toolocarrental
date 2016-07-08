import { CarType } from './car-type';

export interface Car {
    CarTypeCode: string;
    CurrencyCode: string;
    DailyRate: string;
    DeepLink: string;
    DropoffDay: string;
    DropoffTime: string;
    HWRefNumber: string;
    LocationDescription: string;
    MileageDescription: string;
    PickupAirport: string;
    PickupDay: string;
    PickupTime: string;
    RentalDays: string;
    ResultId: string;
    SubTotal: string;
    TaxesAndFees: string;
    TotalPrice: string;
    VendorLocationId: string;
    CarType?: CarType;
}
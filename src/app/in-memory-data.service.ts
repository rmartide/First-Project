import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

//Class to mock the REST calls
//The address will be /api/cars

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const cars = [
      {
        id: 1,
        Brand: 'Mercedes',
        Registration: 1521718105744,
        Country: 'Germany',
        Created_at: 1521718105744,
        Last_updated: 1521718105744
      },
      {
        id: 2,
        Brand: 'BMW',
        Registration: 1421718105744,
        Country: 'Germany',
        Created_at: 1421718105744,
        Last_updated: 1421718105744
      },
      {
        id: 3,
        Brand: 'Renault',
        Registration: 1321718105744,
        Country: 'France',
        Created_at: 1321718105744,
        Last_updated: 1321718105744
      },
      {
        id: 4,
        Brand: 'Seat',
        Registration: 1221718105744,
        Country: 'Spain',
        Created_at: 1221718105744,
        Last_updated: 1221718105744
      },
      {
        id: 5,
        Brand: 'Toyota',
        Registration: 1121718105744,
        Country: 'Japan',
        Created_at: 1121718105744,
        Last_updated: 1121718105744
      }
    ]


    return {cars};
  }

}

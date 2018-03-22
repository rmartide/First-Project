import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

//Class to mock the REST calls

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const cars = [
      {
        Id: 1,
        Brand: 'Mercedes',
        Registration: '1999-01-08 04:05:06',
        Country: 'Germany',
        Created_at: '1999-01-08 04:05:06',
        Last_updated: '1999-01-08 04:05:06'
      },
      {
        Id: 2,
        Brand: 'BMW',
        Registration: '2000-01-08 04:05:06',
        Country: 'Germany',
        Created_at: '2000-01-08 04:05:06',
        Last_updated: '2000-01-08 04:05:06'
      },
      {
        Id: 3,
        Brand: 'Renault',
        Registration: '2001-01-08 04:05:06',
        Country: 'France',
        Created_at: '2001-01-08 04:05:06',
        Last_updated: '2001-01-08 04:05:06'
      },
      {
        Id: 4,
        Brand: 'Seat',
        Registration: '2002-01-08 04:05:06',
        Country: 'Spain',
        Created_at: '2002-01-08 04:05:06',
        Last_updated: '2002-01-08 04:05:06'
      },
      {
        Id: 5,
        Brand: 'Toyota',
        Registration: '2003-01-08 04:05:06',
        Country: 'Japan',
        Created_at: '2003-01-08 04:05:06',
        Last_updated: '2003-01-08 04:05:06'
      }
    ]

    return {cars};
  }

}

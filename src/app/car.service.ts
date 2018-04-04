import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Car } from './car';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable()
export class CarService {

  private apiURL : string = 'api/cars';
  
  constructor(private http: HttpClient) { }

  //Gets all cars from the api server
  getCars() : Observable<Car[]>{
    return this.http.get<Car[]>(this.apiURL)
      .pipe(
        catchError(this.handleErrors('getCars', []))
      );
  }

  getCar(id: number): Observable<Car>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Car>(url)
      .pipe(
        catchError(this.handleErrors<Car>(`getCar id=${id}`))
      );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleErrors<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(error as T);
    }
  }



}

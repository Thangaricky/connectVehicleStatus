import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Company } from '../model/company';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = 'http://localhost:8321/car/overview';
  headers: Headers;
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCompanyVehicleDetails(): Observable<Company[]> {

    return this.http.get<Company[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Company[]>('getCompany'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a CertificateService message with the MessageService */
    private log(message: string): void {
      this.messageService.add(`VehicleService: ${message}`);
  }
}

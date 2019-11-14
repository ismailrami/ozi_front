import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient) { }

    url = environment.apiURL;

    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  getUsers(): Observable<any>{
    return this.http.get(this.url + 'users');
  }

  addUser(user): Observable<any>{
    return this.http.post<any>(this.url + 'users' ,user, this.httpOptions).pipe(
      tap(_ => console.log('fetched product')),
      catchError(this.handleError<any>('getProduct'))
    );
  }
}

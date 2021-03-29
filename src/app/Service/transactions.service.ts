import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  apiUrl = 'http://127.0.0.1:8000/api';
  transDepot: any ;

  constructor(
    private http: HttpClient,

  ) { }

public depotTransactions(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl + '/users/comptes/depots', transaction);
}

  findTransaction(code: string){
    return this.http.get(`/findCodeTransaction/${code}`)
      //.pipe(catchError(this.handleError));
  }

}

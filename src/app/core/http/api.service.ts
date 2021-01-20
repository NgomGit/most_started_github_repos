import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient) { }


  public getElementList(endpoint: string) {
    return this.http.get(environment.apiEndpoint + endpoint)
  }

  public getElementListByPageNumber(endpoint: string, pageNumber:number) {
    return this.http.get(environment.apiEndpoint + endpoint + "&page=" + pageNumber);
  }
}

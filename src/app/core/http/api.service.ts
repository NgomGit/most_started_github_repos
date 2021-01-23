import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient) { }

  public getElementList(resourceUrl: string) {
    return this.http.get(environment.apiEndpoint + resourceUrl);
  }

  public getElementListByPageNumber(resourceUrl: string, pageNumber:number) {
    return this.http.get(environment.apiEndpoint + resourceUrl + "&page=" + pageNumber);
  }
}

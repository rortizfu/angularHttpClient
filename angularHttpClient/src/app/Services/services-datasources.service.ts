import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesDatasourcesService {

  constructor(private http: HttpClient) { }
  
  public getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
    // return of(new Class());
  }
}

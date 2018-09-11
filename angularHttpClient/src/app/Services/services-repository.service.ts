import { Injectable } from '@angular/core';
import { ServicesDatasourcesService } from './services-datasources.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ServicesRepositoryService {

  constructor(private objSerDatasource: ServicesDatasourcesService) { 
  }

  private data = new Subject();
  public data$ = this.data.asObservable();
  private _dataCache;

  public getPhotos(){
    debugger;
      this.objSerDatasource.getPhotos().subscribe((photos) => {
        this._dataCache = photos;
        this.data.next(photos);
        
      });
  }
}

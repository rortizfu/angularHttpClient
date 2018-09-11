import { TestBed, inject } from '@angular/core/testing';

import { ServicesDatasourcesService } from './services-datasources.service';

describe('ServicesDatasourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesDatasourcesService]
    });
  });

  it('should be created', inject([ServicesDatasourcesService], (service: ServicesDatasourcesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ServicesRepositoryService } from './services-repository.service';

describe('ServicesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesRepositoryService]
    });
  });

  it('should be created', inject([ServicesRepositoryService], (service: ServicesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});

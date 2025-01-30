import { TestBed } from '@angular/core/testing';

import { CreateclassService } from './createclass.service';

describe('CreateclassService', () => {
  let service: CreateclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

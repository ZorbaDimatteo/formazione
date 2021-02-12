import { TestBed } from '@angular/core/testing';

import { MyDreamServiceService } from './my-dream-service.service';

describe('MyDreamServiceService', () => {
  let service: MyDreamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDreamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

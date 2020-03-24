import { TestBed } from '@angular/core/testing';

import { ElipgoService } from './elipgo.service';

describe('ElipgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElipgoService = TestBed.get(ElipgoService);
    expect(service).toBeTruthy();
  });
});

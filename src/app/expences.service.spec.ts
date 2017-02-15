/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpencesService } from './expences.service';

describe('ExpencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpencesService]
    });
  });

  it('should ...', inject([ExpencesService], (service: ExpencesService) => {
    expect(service).toBeTruthy();
  }));
});

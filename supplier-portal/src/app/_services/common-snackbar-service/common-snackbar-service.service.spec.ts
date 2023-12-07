import { TestBed } from '@angular/core/testing';

import { CommonSnackbarServiceService } from './common-snackbar-service.service';

describe('CommonSnackbarServiceService', () => {
  let service: CommonSnackbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonSnackbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

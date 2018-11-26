import { TestBed, inject } from '@angular/core/testing';

import { MinitrackerapiService } from './minitrackerapi.service';

describe('MinitrackerapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinitrackerapiService]
    });
  });

  it('should be created', inject([MinitrackerapiService], (service: MinitrackerapiService) => {
    expect(service).toBeTruthy();
  }));
});

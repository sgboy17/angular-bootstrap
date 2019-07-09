import { TestBed } from '@angular/core/testing';

import { HttpBookService } from './http-book.service';

describe('HttpBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpBookService = TestBed.get(HttpBookService);
    expect(service).toBeTruthy();
  });
});

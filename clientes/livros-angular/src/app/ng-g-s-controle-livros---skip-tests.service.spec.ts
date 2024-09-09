import { TestBed } from '@angular/core/testing';

import { NgGSControleLivrosSkipTestsService } from './ng-g-s-controle-livros---skip-tests.service';

describe('NgGSControleLivrosSkipTestsService', () => {
  let service: NgGSControleLivrosSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGSControleLivrosSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

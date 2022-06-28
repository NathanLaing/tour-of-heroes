import { TestBed } from '@angular/core/testing';

import { heroeservice } from './hero.service';

describe('heroeservice', () => {
  let service: heroeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(heroeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

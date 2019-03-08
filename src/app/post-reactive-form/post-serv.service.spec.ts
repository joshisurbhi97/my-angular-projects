import { TestBed } from '@angular/core/testing';

import { PostServService } from './post-serv.service';

describe('PostServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostServService = TestBed.get(PostServService);
    expect(service).toBeTruthy();
  });
});

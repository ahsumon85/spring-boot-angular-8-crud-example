import { TestBed } from '@angular/core/testing';
import { TutorialDaoImpl } from './tutorial.dao.impl';
import { TutorialDao } from './tutorial.dao.service';


describe('TutorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialDao = TestBed.get(TutorialDaoImpl);
    expect(service).toBeTruthy();
  });
});

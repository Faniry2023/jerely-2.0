import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validationcode } from './validationcode';

describe('Validationcode', () => {
  let component: Validationcode;
  let fixture: ComponentFixture<Validationcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validationcode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validationcode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

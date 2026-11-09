import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapSlide } from './etap-slide';

describe('EtapSlide', () => {
  let component: EtapSlide;
  let fixture: ComponentFixture<EtapSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtapSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapSlide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

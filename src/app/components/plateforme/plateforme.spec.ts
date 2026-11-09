import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plateforme } from './plateforme';

describe('Plateforme', () => {
  let component: Plateforme;
  let fixture: ComponentFixture<Plateforme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plateforme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plateforme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

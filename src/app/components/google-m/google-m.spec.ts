import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleM } from './google-m';

describe('GoogleM', () => {
  let component: GoogleM;
  let fixture: ComponentFixture<GoogleM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

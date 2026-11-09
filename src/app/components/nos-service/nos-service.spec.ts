import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosService } from './nos-service';

describe('NosService', () => {
  let component: NosService;
  let fixture: ComponentFixture<NosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

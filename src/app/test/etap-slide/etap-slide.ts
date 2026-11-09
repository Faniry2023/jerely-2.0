import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-etap-slide',
  imports: [],
  templateUrl: './etap-slide.html',
  styleUrls: ['./etap-slide.css'],
  animations: [
    trigger('slideForm', [
      state('step1', style({ transform: 'translateX(0%)' })),
      state('step2', style({ transform: 'translateX(-100%)' })),
      transition('step1 <=> step2', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class EtapSlide {
  step = 1;
  stepState = 'step1';
    next() {
      this.step = 2;
      this.stepState = 'step2';
  }

  prev() {
    if (this.step === 2) {
      this.step = 1;
      this.stepState = 'step1';
    }
  }
}

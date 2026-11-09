import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  animations: [
    trigger('slideForm', [
      state('step1', style({ transform: 'translateX(0%)' })),
      state('step2', style({ transform: 'translateX(-47%)' })),
      transition('step1 <=> step2', [animate('400ms ease-in-out')])
    ])
  ]
})
export class Register {
  pasShwo = signal(false);
}

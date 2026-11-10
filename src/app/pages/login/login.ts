import { Component, signal } from '@angular/core';
import { Validationcode } from '../../components/validationcode/validationcode';

@Component({
  selector: 'app-login',
  imports: [Validationcode],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 pasShwo = signal(false);
 isForm = signal(false);
}

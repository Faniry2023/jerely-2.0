import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router)
  infoShwo = signal(false);
  ShowInfo(){
    this.infoShwo.set(!this.infoShwo());
  }
  goToHome(){
    this.router.navigate(['jerely']);
  }
}

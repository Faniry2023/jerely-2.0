import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  infoShwo = signal(false);
  menuActive = signal("none");
  ShowInfo(){
    this.infoShwo.set(!this.infoShwo());
  }
  goToAbout(menu:string){
    this.actionActiveMenu(menu);
    this.router.navigate(['jerely/about']);
  }
  goToHome(menu:string){
    this.actionActiveMenu(menu);
    this.router.navigate(['jerely']);
    alert(this.menuActive())
  }
  goToLogin(){
    this.router.navigate(['jerely/login']);
  }
  goToDashboard(){
    this.router.navigate(['jerely/dashboard']);
  }
  actionActiveMenu(menu:string){
    this.menuActive.set(menu);
  }
}

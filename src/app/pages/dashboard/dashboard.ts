import { Component, inject, signal } from '@angular/core';
import { Header } from '../../components/dashboard/header/header';
import { MatIcon } from "@angular/material/icon";
import { Messages } from '../../components/dashboard/messages/messages';
import { Router } from '@angular/router';
import { Accueil } from '../../components/dashboard/accueil/accueil';

@Component({
  selector: 'app-dashboard',
  imports: [Header, MatIcon,Messages,Accueil],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private router = inject(Router)
  menu = signal(false);
  showMenu(){
    this.menu.set(!this.menu());
  }

  goToHome(){
    this.router.navigate(['jerely']);
  }
}

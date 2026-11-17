import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthStore } from '../../../store/auth.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-header',
  imports: [MatIcon,MatProgressSpinnerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authStore = inject(AuthStore);
  private router = inject(Router)
  infoShwo = signal(false);
  ShowInfo(){
    this.infoShwo.set(!this.infoShwo());
  }
  goToHome(){
    this.router.navigate(['jerely']);
  }
  async logout(){
    await this.authStore.Logout();
    if(!this.authStore.isError()){
      this.router.navigate(['jerely/login'],{replaceUrl:true});
    }
  }
}

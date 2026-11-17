import { AfterViewInit, Component, ElementRef, inject, NgZone, signal, ViewChild } from '@angular/core';
import { Validationcode } from '../../components/validationcode/validationcode';
import { GoogleTokenHelper } from '../../helpers/google-token-helper';
import { AuthStore } from '../../store/auth.store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login-model';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

declare const google: any;

@Component({
  selector: 'app-login',
  imports: [Validationcode,ReactiveFormsModule,MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit{

  fb = inject(FormBuilder);
  authStore = inject(AuthStore);
  router = inject(Router);

 @ViewChild('googleBtn') googleBtn!: ElementRef;
  private zone = inject(NgZone);

  form = this.fb.group({
    email:['',[Validators.required,Validators.email]]
  })
  async submit(){
    if(this.form.invalid){
      alert('remplir le champ email');
      return;
    }
    const login: LoginModel = {
      id:'',
      email:this.form.value.email!,
      mdp: '',
      role: '',
      se_souvenir: false,
      fournisseur_auth: 'email'
    }

    await this.authStore.Auth(login);
  }

 ngAfterViewInit() {
   this.initGoogle();
 }
  private initGoogle() {
    if (typeof google === 'undefined' || !google.accounts) {
      setTimeout(() => this.initGoogle(), 200); // réessaie dans 200 ms
      return;
    }

    google.accounts.id.initialize({
      client_id: '475052718894-63um7sncqj4nml7pl3uh0i0p0faljeap.apps.googleusercontent.com',
      callback: (response: any) => this.zone.run(async () => {
        //console.log('Token Google :', response.credential);
        const googleToken: GoogleTokenHelper = {
          idToken: response.credential
        }
        await this.authStore.GoogleLogin(googleToken);
        if(!this.authStore.isError() && this.authStore.isLogged()){
          this.router.navigate(['jerely/dashboard'],{replaceUrl:true});
        }
      })
    });

    google.accounts.id.renderButton(this.googleBtn.nativeElement, {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      locale: 'fr'
    });
  }
}

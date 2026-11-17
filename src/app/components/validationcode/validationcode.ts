import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthStore } from '../../store/auth.store';
import { CodeVerificationHelper } from '../../helpers/code-verification-helper';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-validationcode',
  imports: [ReactiveFormsModule,MatProgressSpinnerModule],
  templateUrl: './validationcode.html',
  styleUrl: './validationcode.css',
})
export class Validationcode {
  fb = inject(FormBuilder);
  authStore = inject(AuthStore);
  router = inject(Router);
  form = this.fb.group({
    code:['',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]]
  })
  async submit(){
    if(this.form.invalid){
      alert('remplir le champ email');
      return;
    }
    const verif: CodeVerificationHelper = {
      email: this.authStore.login()?.email!,
      code: this.form.value.code!
    }
    await this.authStore.VerifCode(verif);
    if(!this.authStore.isError() && this.authStore.isLogged()){
      this.router.navigate(['jerely/dashboard'],{replaceUrl:true});
    }
  }
}

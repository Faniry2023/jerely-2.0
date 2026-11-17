import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { LoginModel } from "../models/login-model";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { firstValueFrom } from "rxjs";
import { CodeVerificationHelper } from "../helpers/code-verification-helper";
import { GoogleService } from "../services/auth/google.service";
import { GoogleTokenHelper } from "../helpers/google-token-helper";

export interface AuthState{
    login: LoginModel | null;
    await_code: boolean;
    isLogged: boolean;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

const initialState: AuthState = {
    login: null,
    await_code : false,
    isLogged: false,
    isLoading: false,
    isError: false,
    error: null
}

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store,
        service = inject(AuthService),
        serviceGoogle = inject(GoogleService)
    ) =>({
        async Auth(model: LoginModel){
            patchState(store,{isLoading: true, isError: false, error: null});
            try{
                const info = await firstValueFrom(service.auth(model));
                if(info){
                    patchState(store,{isLoading:false, await_code: true, login:model});
                }
            }catch(err: any){
                const errorMessage = err?.detail;
                patchState(store,{isLoading: false, isError: true, error: errorMessage})
                // toastr.error(errorMessage,'Erreur');
                //snackBar.open(errorMessage,'Fermer',{ duration: 5000, panelClass:'error-snackbar'});
            }
        },
        async VerifCode(model: CodeVerificationHelper){
            patchState(store,{isLoading: true, isError: false, error: null});
            try{
                const log = await firstValueFrom(service.verifCode(model));
                if(log){
                    patchState(store,{isLoading:false, await_code: false, login: log, isLogged: true})
                }
            }catch(err: any){
                const errorMessage = err?.detail;
                patchState(store,{isLoading: false, isError: true, error: errorMessage})
                // toastr.error(errorMessage,'Erreur');
                //snackBar.open(errorMessage,'Fermer',{ duration: 5000, panelClass:'error-snackbar'});
            }
        },
        async GoogleLogin(model: GoogleTokenHelper){
            patchState(store,{isLoading: true, isError: false, error: null});
            try{
                const info = await firstValueFrom(serviceGoogle.googleLogin(model));
                if(info){
                    patchState(store,{isLoading:false, await_code: false, login: info, isLogged: true})
                }
            }catch(err: any){
                const errorMessage = err?.detail;
                patchState(store,{isLoading: false, isError: true, error: errorMessage})
                // toastr.error(errorMessage,'Erreur');
                //snackBar.open(errorMessage,'Fermer',{ duration: 5000, panelClass:'error-snackbar'});
            }
        },
        async Me(){
            patchState(store,{isLoading: true, isError: false, error: null});
            try{
                const log = await firstValueFrom(service.me());
                if(log){
                    patchState(store,{isLoading:false, login: log, isLogged: true})
                }
            }catch(err: any){
                const errorMessage = err?.detail;
                patchState(store,{isLoading: false, isError: true, error: errorMessage})
                // toastr.error(errorMessage,'Erreur');
                //snackBar.open(errorMessage,'Fermer',{ duration: 5000, panelClass:'error-snackbar'});
            }
        },
        async Logout(){
            patchState(store, { isLoading: true, error: null ,isError:false});
            try{
                 await firstValueFrom(service.logout());
                patchState(store, { login: null, isLoading: false,isLogged:false });
            }catch (err: any) {
                const msgError = err?.detail;
                patchState(store, { error: msgError, isLoading: false ,isError:true});
                // snackBar.open(msgError,'Fermer',{ duration: 5000, panelClass:'error-snackbar'});
            }
        },
    }))
)
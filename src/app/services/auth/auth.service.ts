import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginModel } from '../../models/login-model';
import { CodeVerificationHelper } from '../../helpers/code-verification-helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = "https://localhost:7207/";
  private httpClient = inject(HttpClient);

  
  auth(model: LoginModel):Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + 'api/auth/google/email',model)
    .pipe(catchError(this.handleError));
  }

  verifCode(model: CodeVerificationHelper):Observable<LoginModel>{
    console.log(' email:', model.email);
    return this.httpClient.post<LoginModel>(this.baseUrl + 'api/auth/code', model,{withCredentials:true})
    .pipe(catchError(this.handleError));
  }

  me():Observable<LoginModel>{
    return this.httpClient.get<LoginModel>(this.baseUrl + 'api/me',{withCredentials:true})
    .pipe(catchError(this.handleError));
  }

  logout():Observable<void>{
    return this.httpClient.post<void>(this.baseUrl + 'api/logout',{},{withCredentials:true})
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error?.title && error.error?.detail) {
      // Erreur ProblemDetails (provenant de .NET 8)
      return throwError(() => ({
        status: error.status,
        title: error.error.title,
        detail: error.error.detail
      }));
    }
    // Erreur générique
    return throwError(() => ({
      status: error.status,
      title: "Erreur inconnue",
      detail: "Une erreur inattendue est survenue."
    }));
  }
}

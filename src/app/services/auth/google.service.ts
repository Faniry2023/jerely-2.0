import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { GoogleTokenHelper } from '../../helpers/google-token-helper';
import { GoogleAuthInfoHelper } from '../../helpers/google-auth-info-helper';
import { LoginModel } from '../../models/login-model';

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  private baseUrl = "https://localhost:7207/";
  private httpClient = inject(HttpClient);

  googleLogin(model: GoogleTokenHelper):Observable<LoginModel>{
    return this.httpClient.post<LoginModel>(this.baseUrl + 'api/auth/google', model,{withCredentials:true})
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

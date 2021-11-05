import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";
import {LoginModel} from "../model/login.model";
import {finalize, tap} from "rxjs/operators";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  usuario!: LoginModel | null;
  token!: String | undefined;

  constructor(private loginService: LoginService) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario;
      this.token = this.usuario?.token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token !== undefined) { // Existe usuario
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.token}` // Añado token
        }
      });
    }

    return next.handle(request).pipe(tap(e => {
    }), finalize(() => {
      console.log(request.url + `(metodo ${request.method}) ha finalizado`);
    })); // Ejecutar la peticoin
  }
}

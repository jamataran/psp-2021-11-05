import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";
import {LoginModel} from "../model/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuario != null; // Cambiar esto para saber si estoy logado.
  }

  constructor(private loginService: LoginService) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

}

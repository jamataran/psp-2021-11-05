import {Component} from '@angular/core';
import {LoginService} from "./services/login.service";
import {LoginModel} from "./model/login.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psp20211105';

  usuario!: LoginModel | null;

  constructor(private loginService: LoginService) {
    loginService.login.subscribe(usuario => this.usuario = usuario);
  }

  hayUsuario(): boolean {
    return this.usuario != null;
  }

  logout():void{
    this.loginService.performLogout();
  }


}

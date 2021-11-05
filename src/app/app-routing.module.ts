import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImagesComponent} from "./components/images/images.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthguardGuard} from "./guards/authguard.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'imagenes',
    component: ImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImagesComponent} from "./components/images/images.component";

const routes: Routes = [
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

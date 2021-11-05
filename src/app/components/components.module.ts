import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule, // Empaquetado el carrousel
    FormsModule // Los controles de formulario
  ]
})
export class ComponentsModule { }

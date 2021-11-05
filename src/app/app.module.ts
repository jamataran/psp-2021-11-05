import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "./components/components.module";
import {GuardsModule} from "./guards/guards.module";
import {InterceptorsModule} from "./interceptors/interceptors.module";
import {ServicesModule} from "./services/services.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    GuardsModule,
    InterceptorsModule,
    FormsModule,
    ServicesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

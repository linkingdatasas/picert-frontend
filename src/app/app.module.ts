import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';
import {AppCustomPrimeNgModule} from './modules/app-custom-primeng.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VerifyComponent} from './components/verify/verify.component';

import {UtilityService} from './services';


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCustomPrimeNgModule,
    HttpClientModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

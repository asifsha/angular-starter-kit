import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './modules/auth/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,   
    PageNotFoundComponent,
    ItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

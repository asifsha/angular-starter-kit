import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ItemsComponent } from "./components/items/items.component";
import { LoginComponent } from "./modules/auth/components/login/login.component";
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiServiceComponent } from './services/api-service/api-service.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ItemsComponent,
    LoginComponent,
    DashboardComponent,
    ApiServiceComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

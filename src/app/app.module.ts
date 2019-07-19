import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ItemsComponent } from "./components/items/items.component";
import { LoginComponent } from "./modules/auth/components/login/login.component";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./components/about/about.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgGridModule } from "ag-grid-angular";
import { ItemDetailsComponent } from "./components/item-details/item-details.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ItemsComponent,
    LoginComponent,
    AboutComponent,
    SideMenuComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  entryComponents: [ItemDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule,
MatOptionModule, MatSelectModule, MatDialogModule, MatIconModule, MatChipsModule, MatInputModule, MatSlideToggle, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule} from '@angular/material';

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
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,    
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,    
    MatDatepickerModule,
    MatNativeDateModule,    
    MatAutocompleteModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  entryComponents: [ItemDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

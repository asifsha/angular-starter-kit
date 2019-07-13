import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ItemsComponent } from "./components/items/items.component";
import { LoginComponent } from './modules/auth/components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


//const routes: Routes = [];

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "items", component: ItemsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

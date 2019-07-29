import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ItemsComponent } from "./components/items/items.component";
import { AboutComponent } from './components/about/about.component';



//const routes: Routes = [];

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },  
  { path: "items", component: ItemsComponent },  
  { path: "about", component: AboutComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

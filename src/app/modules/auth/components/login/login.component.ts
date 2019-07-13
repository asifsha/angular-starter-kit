import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  message: string;
  submitted: boolean;
  form = { user: "", password: "" };
  showError = false;
  errorMessage = "";

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  onSubmit() {
    this.submitted = true;
    this.showError = false;
    console.log("on sumbit");
    console.log(this.form);
    this.errorMessage = "Please enter";
    if (this.form.user === "") {
      this.errorMessage += " user name";
      this.showError = true;
    }
    if (this.form.user === "" && this.form.password === "")
      this.errorMessage += " and";
    if (this.form.password === "") {
      this.errorMessage += " password";
      this.showError = true;
    }
    this.errorMessage += ".";
    if(this.showError===false){
      this.login();
    }
  }
  login() {
    this.message = "Trying to log in ...";

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl
          ? this.router.parseUrl(this.authService.redirectUrl)
          : "/dashboard";

        // let navigationExtras: NavigationExtras = {
        //   queryParamsHandling: "preserve",
        //   preserveFragment: true
        // };

        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

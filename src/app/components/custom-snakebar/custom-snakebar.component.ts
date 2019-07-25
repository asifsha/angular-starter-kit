import { Component, OnInit, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material";

@Component({
  selector: "app-custom-snakebar",
  templateUrl: "./custom-snakebar.component.html",
  styleUrls: ["./custom-snakebar.component.less"]
})
export class CustomSnakebarComponent implements OnInit {
  message;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message;
  }

  ngOnInit() {}
}

import { Component, OnInit, Input, AfterContentInit, Inject } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.less"]
})
export class ItemDetailsComponent implements OnInit {
  
  item;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    console.log(this.data);
    
    this.loadData();
  }

  async loadData() {
    if (this.data.itemId === -1) {
      this.item = await this.apiService.getNewItem();
    } else {
      this.item = await this.apiService.getItem(this.data.itemId);
    }
  }
}

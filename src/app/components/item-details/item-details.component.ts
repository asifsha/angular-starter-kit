import { Component, OnInit, Input, AfterContentInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.less"]
})
export class ItemDetailsComponent implements OnInit {
  @Input() itemId;

  item;
  constructor(
    public activeModal: NgbActiveModal,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    console.log(this.itemId);
    this.loadData();
  }

  async loadData() {
    this.item = await this.apiService.getItem(this.itemId);
  }
}

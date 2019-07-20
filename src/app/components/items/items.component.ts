import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.less"]
})
export class ItemsComponent implements OnInit {
  columnDefs = [
    {
      headerName: "id",
      field: "id",
      hide: true
    },
    {
      headerName: "Name",
      field: "name",
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { headerName: "Date", field: "date" },
    { headerName: "Price", field: "price" },
    { headerName: "InStock", field: "inStock" },
    { headerName: "Type", field: "type" }
  ];

  rowData;
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 }
  // ];

  gridApi;

  constructor(private modalService: NgbModal, private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  async loadData() {
    this.rowData = await this.apiService.getAllItems();
    console.log(this.rowData);
  }

  onAdd() {
    this.showItemDetails(-1);
  }

  onEdit() {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    if (selectedRows.length === 0) {
      return;
    }

    this.showItemDetails(selectedRows[0].itemId);
  }

  onDelete() {}

  showItemDetails(itemId) {
    const modalRef = this.modalService.open(ItemDetailsComponent);
    modalRef.componentInstance.itemId = itemId;
  }
}

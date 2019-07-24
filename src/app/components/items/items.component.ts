import { Component, OnInit } from "@angular/core";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { ApiService } from "src/app/services/api.service";
import { MatDialog, MatSnackBar } from "@angular/material";

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

  gridApi;

  showAlert: boolean = false;

  pleaseSelectASingleRecordMessage: string =
    "Please select a single record to perform this operation.";

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  hideToast() {
    console.log("in hiding");
    //this.showToast=false;
  }
  async loadData() {
    this.rowData = await this.apiService.getAllItems();
    console.log(this.rowData);
  }

  onAdd() {
    this.showAlert = false;
    this.showItemDetails(-1);
  }

  onEdit() {
    this.showAlert = false;
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    if (selectedRows.length === 0) {
      this.showAlert = true;
      this.openSnackBar(this.pleaseSelectASingleRecordMessage, undefined);
      return;
    }

    this.showItemDetails(selectedRows[0].itemId);
  }

  onDelete() {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    if (selectedRows.length === 0) {
      this.openSnackBar(this.pleaseSelectASingleRecordMessage, undefined);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  showItemDetails(itemId) {
    this.dialog.open(ItemDetailsComponent, {
      data: {
        itemId: itemId
      }
    });
  }

  // showSuccess() {
  //   this.toastService.show("I am a success toast", {
  //     classname: "bg-success text-light",
  //     delay: 10000
  //   });
  // }

  // showDanger(dangerTpl) {
  //   this.toastService.show(dangerTpl, {
  //     classname: "bg-danger text-light",
  //     delay: 15000
  //   });
  // }
}

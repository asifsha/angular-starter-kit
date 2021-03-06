import { Component, OnInit } from "@angular/core";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { ApiService } from "src/app/services/api.service";
import { MatDialog, MatSnackBar } from "@angular/material";
import { __await } from "tslib";

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
    {
      headerName: "Date",
      field: "date",
      cellRenderer: data => {
        return data.value ? new Date(data.value).toLocaleDateString() : "";
      }
    },
    { headerName: "Price", field: "price" },
    {
      headerName: "In Stock",
      field: "inStock",
      cellRenderer: data => {
        return data.value ? "Yes" : "No";
      }
    },
    {
      headerName: "Type",
      field: "type",
      cellRenderer: data => {
        return data.value
          ? this.itemTypes.find(itemtype => itemtype.id == data.value).name
          : "";
      }
    }
  ];

  rowData;

  gridApi;

  itemTypes;

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

  async loadData() {
    this.rowData = await this.apiService.getAllItems();
    this.itemTypes = await this.apiService.getItemTypes();    
  }

  onAdd() {
    this.showItemDetails(-1);
  }

  onEdit() {
    const selectedRows = this.gridApi.getSelectedRows();    
    if (selectedRows.length === 0) {
      this.openSnackBar(this.pleaseSelectASingleRecordMessage, undefined);
      return;
    }

    this.showItemDetails(selectedRows[0].itemId);
  }

  onDelete() {
    const selectedRows = this.gridApi.getSelectedRows();   
    if (selectedRows.length === 0) {
      this.openSnackBar(this.pleaseSelectASingleRecordMessage, undefined);
      return;
    }
    this.apiService.deleteItem(selectedRows[0].itemId);
    var res = this.gridApi.updateRowData({ remove: selectedRows });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  showItemDetails(itemId) {
    let dialogRef = this.dialog.open(ItemDetailsComponent, {
      data: {
        itemId: itemId
      }
    });

    dialogRef.afterClosed().subscribe(result => {      
      if (result !== undefined) {
        if (result.mode === "add") {
          this.gridApi.updateRowData({ add: [result.item] });
        } else {
          this.gridApi.updateRowData({ update: [result.item] });
        }
      }
    });
  } 
}

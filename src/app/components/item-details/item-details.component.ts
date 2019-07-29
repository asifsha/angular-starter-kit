import {
  Component,
  OnInit,
   Inject,
   Output,
   EventEmitter
} from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { CustomSnakebarComponent } from '../custom-snakebar/custom-snakebar.component';

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.less"]
})
export class ItemDetailsComponent implements OnInit {

  @Output() itemSaved = new EventEmitter();

  item;
  itemTypes;
  heading;
  constructor(
    public dialogRef: MatDialogRef<ItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {
    this.item = {
      date: "",
      inStock: false,
      itemId: -1,
      name: "",
      price: 0,
      type: 0,
      newName : "New Item"
    };
  }

  ngOnInit() {
    console.log(this.data);
    this.heading = this.data.itemId === -1 ? "Add - Item" : "Edit Item";
    this.loadData();
  }

  async loadData() {
    if (this.data.itemId === -1) {
      this.item = await this.apiService.getNewItem();
    } else {
      this.item = await this.apiService.getItem(this.data.itemId);
    }

    this.itemTypes = await this.apiService.getItemTypes();
    console.log(this.item);
  }
  onSave() {
    console.log(this.item);
    if (this.validateItem()) {
      this.apiService.saveItem(this.item);
      this.itemSaved.emit(this.item);
      this.dialogRef.close({mode: this.data.itemId === -1 ? 'add' : 'update', item : this.item});
    }
  }

  validateItem() {
    let message = "";
    if (this.item.name === undefined || this.item.name === "") {
      message = "Please enter name.";
    }
    if (this.item.type === undefined || this.item.type === 0) {
      message += "<br> Please select a type.";
    }
    if(message!=='')
    this.openSnackBar(message, undefined);

    return message === "";
  }

  onCancel() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.openFromComponent(CustomSnakebarComponent, {
      duration: 5000,
      data: { message : message},      
    });
  }
}

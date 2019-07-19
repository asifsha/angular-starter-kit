import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.less"]
})
export class ItemsComponent implements OnInit {
  columnDefs = [
    {
      headerName: "Make",
      field: "make",
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onAdd(){
    this.showItemDetails();
  }

  onEdit(){

  }

  onDelete(){

  }

  showItemDetails(){
    const modalRef = this.modalService.open(ItemDetailsComponent);
    modalRef.componentInstance.name = 'Details';
  }
}

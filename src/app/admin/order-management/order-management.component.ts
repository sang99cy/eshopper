import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  constructor() { }

  options:any={};
  data:any[] = [];
  columns: any = {};

  ngOnInit(): void {

    this.columns = [
      { key: 'id', title: "ID" },
      { key: 'name', title: 'Name' },
      { key: 'phone', title: 'Phone' },
      { key: 'company', title: 'Company'},
      { key: 'action', title: 'action'},
    ]

    this.data = [
      {
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },
      {
        "id": "2",
        "name": "Brendan 1",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      },
      {
        "id": "3",
        "name": "Brendan 2",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      },
      {
        "id": "4",
        "name": "Brendan 3",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      },
      {
        "id": "5",
        "name": "Brendan 4",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      },
      {
        "id": "6",
        "name": "Brendan 5",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      }, {
        "id": "7",
        "name": "Brendan 6",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      }, {
        "id": "8",
        "name": "Brendan 7",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      },
    ]
  }

  onEdit($event: MouseEvent) {

  }

  onDelete($event: MouseEvent) {

  }

  onClickAddBtn() {

  }

}

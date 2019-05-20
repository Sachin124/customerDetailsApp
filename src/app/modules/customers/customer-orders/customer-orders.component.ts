import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  @Input() customerData: any;
  constructor() { }

  ngOnInit() {
  }

}

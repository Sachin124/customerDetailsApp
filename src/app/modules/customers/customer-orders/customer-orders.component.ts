import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  template: `
  <ul class="list-group card-box-shadow">
    <li class="list-group-item disabled" aria-disabled="true">ORDERS</li>
    <li class="list-group-item" *ngFor="let order of customerData">{{order.order}}</li>
  </ul>
  `
})
export class CustomerOrdersComponent {
  @Input() customerData: any;

}

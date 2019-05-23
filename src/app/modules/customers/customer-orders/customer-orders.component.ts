import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-orders',
  template: `
  <ul class="list-group card-box-shadow">
    <li class="list-group-item disabled" aria-disabled="true">ORDERS</li>
    <li class="list-group-item c-pointer" *ngFor="let order of customerData" (click)="viewOrderDetails(viewOrderDetail, order)">{{order.orderId}} {{order.order}} <span class="float-right"><i 
    class='fa fa-eye fa-1x text-primary'></i></span></li>
  </ul>
  <ng-template #viewOrderDetail>
  <app-order-details [orderDetails]="orderDetails" (onClose)="execOnClose($event)"></app-order-details>
</ng-template>
  `
})
export class CustomerOrdersComponent {

  
  @Input() customerData: any;
  orderDetails;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  viewOrderDetails(viewOrderDetail: TemplateRef<any>, order): void {
    this.orderDetails = order;
    this.modalRef = this.modalService.show(viewOrderDetail);
  }


  // To close the pop-up bootstrap model

  execOnClose($event: any): void {
    this.modalRef.hide();
  }

}

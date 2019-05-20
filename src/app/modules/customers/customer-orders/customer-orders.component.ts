import { Component,  Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-orders',
  template:`<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">ORDERS</li>
  <li class="list-group-item" *ngFor="let order of customerData">{{order.order}} {{order.orderId}} <span class="float-right">
  <i (click)="viewOrderDetails(viewOrder, order)"
   class='fa fa-eye fa-1x text-info'></i></span></li>
</ul>

<ng-template #viewOrder>
<app-order-details [orderDetail]="orderDetail"></app-order-details>
</ng-template>
`
})
export class CustomerOrdersComponent{
  @Input() customerData: any;
  viewDetails: boolean;
  modalRef: BsModalRef;
  orderDetail: any;
  constructor(private modalService: BsModalService) { }

  viewOrderDetails(viewOrder: TemplateRef<any>, order) {
    this.modalRef = this.modalService.show(viewOrder);
    this.orderDetail = order;
    console.log(this.orderDetail);
    
  }

  execOnClose(){
    this.modalRef.hide();
  }

}

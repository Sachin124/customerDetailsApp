import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-details',
  template: `<div class="modal-header">
  <h4 class="modal-title pull-left">Customer Order Details</h4>
  <button type="button" class="close pull-right" aria-label="Close" (click)="closeModal()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <table class="table"> 
    <tbody>
      <tr>
        <th scope="row">OrderId</th>
        <td>{{orderDetails.orderId}}</td>
      </tr>
      <tr>
        <th scope="row">Order-Details</th>
        <td>{{orderDetails.order}}</td>
      </tr>     
    </tbody>
  </table>
</div>
`
})
export class OrderDetailsComponent {
  @Input() orderDetails: any;
  @Output() onClose = new EventEmitter();

  closeModal() {
    this.onClose.emit();
  }
}

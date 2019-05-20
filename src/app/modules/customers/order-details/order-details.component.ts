import { Component,  Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent{

  @Input() orderDetail: any;

  @Output() onClose = new EventEmitter();

  closeModal(){
    this.onClose.emit('all closed');
  }

}

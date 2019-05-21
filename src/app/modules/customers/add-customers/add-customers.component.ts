import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html'
})
export class AddCustomersComponent implements OnInit {

  @Input() customerDetails: any;
  @Output() onClose = new EventEmitter();
  @Output() updateData = new EventEmitter();
  @Output() saveData = new EventEmitter();

  editData: any = {};
  modalName: string;
  constructor() { }

  ngOnInit():void {
    if (this.customerDetails) {
      this.editData = this.customerDetails;
      this.modalName = `Edit ${this.customerDetails.name} Information`;
    } else {
      this.modalName = `Add New Customer Information`;
      this.customerDetails = null;
    }
  }

  closeModal():void {
    this.onClose.emit();
    this.onClose.emit('all closed');
  }

  save(value):void {
    this.saveData.emit(value);
  }


  update(value):void {
    value.id = this.editData.id;
    this.updateData.emit(value);
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  @Input() customerDetails:any;
  @Output() onClose = new EventEmitter();
  @Output() updateData = new EventEmitter();
  @Output() saveData = new EventEmitter();

  editData: any ={};
  constructor() { }

  ngOnInit() {
    console.log(this.customerDetails);    
    if(this.customerDetails){
      this.editData = this.customerDetails;
    }else{
      this.customerDetails = null;
    }
  }

  closeModal(){
    this.onClose.emit(); 
    this.onClose.emit('all closed');
  }

  save(value){    
    this.saveData.emit(value);
  }


  update(value){
    value.id = this.editData.id;
    this.updateData.emit(value);
  }

}

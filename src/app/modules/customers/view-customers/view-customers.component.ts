import { Component,  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html'
})
export class ViewCustomersComponent{

  customers: any[] = [
    {
      id: 1, name: "John Due", mobile: "1234567890", email: "abc@example.com",
      orders: [
              {orderId: 1, order: "Mobile Phone"},
              {orderId: 2, order: "Watch"},
              {orderId: 3, order: "Washing Machine"}
      ]
    },
    { id: 2, name: "Monalisa", mobile: "0987456123", email: "xyz@example.com",
    orders: [
            {orderId: 4, order: "Body-Spary"},
            {orderId: 5, order: "Data-Cable"},
            {orderId: 6, order: "Headphone"}
    ] },
    { id: 3, name: "Dr. DeadMan", mobile: "0369852147", email: "pqr@example.com",
    orders: [
            {orderId: 7, order: "Laptop"},
            {orderId: 8, order: "Keyboard"},
            {orderId: 9, order: "Cooler"}
    ] }
  ]
  customerName: string;
  isCustomerView: boolean;
  isOrderView: boolean;
  customerData: any;
  detailsView: boolean;
  customerDetails: any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }


  viewCustomerActions(customerDetails){
    this.customerName = customerDetails.name;
    this.isCustomerView = true;
    this.customerDetails = customerDetails;
    this.customerData = this.customerDetails.orders;   
  }

  viewOrders(){
    this.isOrderView = true;
    this.detailsView = false;

  }

  viewCustomerDetails(){
    this.isOrderView = false;
    this.detailsView = true;
  }

  addCustomerDetails(addCustomer: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addCustomer);
  }

  editCustomerDetails(editCustomer: TemplateRef<any>) {
    this.modalRef = this.modalService.show(editCustomer);
  }

  execOnClose($event: any){
    this.modalRef.hide();
  }


  saveData(data){  
    data.id = this.customers.length + 1;
    this.customers.push(data);
    this.modalRef.hide();

  }

  updateData(data){
    const customerIndex = this.customers.findIndex(p=>{
      return p.id === data.id;
    })


    const customer = {
      ...this.customers[customerIndex]
    }

    // customer.name = event.target.value;
    customer.name = data.name;
    customer.mobile = data.mobile; 
    customer.email = data.email; 

    const customers = [...this.customers]
    customers[customerIndex] = customer;
    this.modalRef.hide();

    // this.setState({
    //   customers:customers
    // })
  }


  deleteCustomer(){
    // const customerIndex =  this.customerDetails.id;

    const customerIndex = this.customers.findIndex(p=>{
      return p.id === this.customerDetails.id;
    });

    let customer = [...this.customers];
    customer.splice(customerIndex, 1);
    this.customers = customer;

    this.isCustomerView = false;
    this.isOrderView = false;
    this.detailsView = false;
  }

}

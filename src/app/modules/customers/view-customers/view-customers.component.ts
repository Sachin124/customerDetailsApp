import { Component,  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html'
})
export class ViewCustomersComponent {
// Default customer Array
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
  ];

  customerName: string; // to store customer name
  isCustomerView: boolean;
  isOrderView: boolean;
  customerData: any;
  detailsView: boolean;
  customerDetails: any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

// To Display Some Actions card for particular customer  

  viewCustomerActions(customerDetails):void{
    this.customerName = customerDetails.name;
    this.isCustomerView = true;
    this.customerDetails = customerDetails;
    this.customerData = this.customerDetails.orders;   
  }

//  View particular customer order details

  viewOrders():void{
    this.isOrderView = true;
    this.detailsView = false;
  }

//  hide or show customer information
  viewCustomerDetails():void{
    this.isOrderView = false;
    this.detailsView = true;
  }

// To open the pop-up bootstrap model for Add customer information


  addCustomerDetails(addCustomer: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(addCustomer);
  }

// To open the pop-up bootstrap model for edit particular customer information


  editCustomerDetails(editCustomer: TemplateRef<any>) :void{
    this.modalRef = this.modalService.show(editCustomer);
  }

// To close the pop-up bootstrap model

  execOnClose($event: any):void{
    this.modalRef.hide();
  }

// To save the new customer in customers array

  saveData(data):void{
    data.id = this.customers.length + 1;
    this.customers.push(data);
  }

// To update the particular customer information 

  updateData(data):void{
    const customerIndex = this.customers.findIndex(p=>{
      return p.id === data.id;
    });

    const customer = {
      ...this.customers[customerIndex]
    }

    customer.name = data.name;
    customer.mobile = data.mobile; 
    customer.email = data.email; 

    const customers = [...this.customers]
    customers[customerIndex] = customer;
  }

// To Delete the particular customer information 

  deleteCustomer():void{
    const customerIndex = this.customers.findIndex(p=>{
      return p.id === this.customerDetails.id;
    });
    const customer = [...this.customers];
    customer.splice(customerIndex, 1);
    this.customers = customer;
    this.isOrderView = false;
    this.detailsView = false;
    this.isCustomerView = false;
  }

}

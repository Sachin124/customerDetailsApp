import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  template: `<div class="card card-box-shadow" style="width: 20rem;">
  <img src="../../../../assets/img/user.png" style="width:50%" class="card-img-top mx-auto d-block" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{customerDetails.name}}</h5>
    <p class="card-text"><a class="text-info" href="tel:{{customerDetails.mobile}}">{{customerDetails.mobile}}</a></p>
   </div>
</div>`
})
export class CustomerDetailsComponent {

  @Input() customerDetails: any;

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`<!-- Image and text -->
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Bootstrap
    </a>
  </nav>`
})
export class NavbarComponent {

}

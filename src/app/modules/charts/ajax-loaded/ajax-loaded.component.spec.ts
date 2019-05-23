import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxLoadedComponent } from './ajax-loaded.component';

describe('AjaxLoadedComponent', () => {
  let component: AjaxLoadedComponent;
  let fixture: ComponentFixture<AjaxLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

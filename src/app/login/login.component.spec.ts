import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElipgoService } from '../services/elipgo.service';
import { MockElipgoService } from '../mocks/mock-api-endpoint.spec';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ LoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ElipgoService, useClass: MockElipgoService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login admin', () => {
    component.userAccess.controls.username.setValue('admin1')
    component.userAccess.controls.password.setValue('admin1')
    component.username = 'admin1';
    component.password = 'admin1';
    component.login();
    expect(component.access[0].role).toEqual('admin');
  });

  it('should call login user', () => {
    component.userAccess.controls.username.setValue('user1')
    component.userAccess.controls.password.setValue('user1')
    component.username = 'user1';
    component.password = 'user1';
    component.login();
    expect(component.access[1].role).toEqual('user');
  });

  it('should call returnAccess', () => {
    let event = 'none';
    component.returnAccess(event);
    expect(component.userAccess.controls.username.value).toEqual('');
    expect(component.userAccess.controls.password.value).toEqual('');
  });

});

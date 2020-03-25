import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ElipgoService } from '../services/elipgo.service';
import { MockElipgoService } from '../mocks/mock-api-endpoint.spec';
import { LoginModel } from '../models/LoginModel';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ UserLoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ElipgoService, useClass: MockElipgoService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit item get all stores', () => {
    component.itemTypeControl.setValue('Stores')
    component.itemType = 'Stores';
    component.id = undefined;
    component.submitItem();
  });

  it('should submit item get all articles', () => {
    component.itemTypeControl.setValue('Articles')
    component.itemType = 'Articles';
    component.id = undefined;
    component.submitItem();
  });

  it('should submit item get all articles by store', () => {
    component.itemTypeControl.setValue('Articles')
    component.userForm.controls.idControl.setValue(1)
    component.itemType = 'Articles';
    component.id = 1;
    component.submitItem();
  });

  it('should call regresar', () => {
    component.loginAccess = new LoginModel;
    component.regresar();
    expect(component.loginAccess.role).toEqual('none');
  });
});

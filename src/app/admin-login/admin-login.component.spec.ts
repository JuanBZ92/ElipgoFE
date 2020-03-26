import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mockSet } from '../mocks/mock-api-data.spec';
import { LoginModel } from '../models/LoginModel';
import { ElipgoService } from '../services/elipgo.service';
import { MockElipgoService } from '../mocks/mock-api-endpoint.spec';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AdminLoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ElipgoService, useClass: MockElipgoService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit item edit store', () => {
    component.storeRequest = mockSet.getStoreRequestEdit;
    component.itemTypeControl.setValue('Stores');
    component.actionTypeControl.setValue('Edit');
    component.itemType = 'Stores';
    component.actionType = 'Edit';
    component.submitItem();

  });

  it('should submit item edit article', () => {
    component.articleRequest = mockSet.getArticlesRequestEdit;
    component.itemTypeControl.setValue('Articles');
    component.actionTypeControl.setValue('Edit');
    component.itemType = 'Articles';
    component.actionType = 'Edit';
    component.submitItem();
  });

  it('should submit item add article', () => {
    component.articleRequest = mockSet.getArticlesRequestAdd;
    component.itemTypeControl.setValue('Articles');
    component.actionTypeControl.setValue('Add');
    component.itemType = 'Articles';
    component.actionType = 'Add';
    component.submitItem();
  });

  it('should submit item add store', () => {
    component.storeRequest = mockSet.getStoreRequestAdd;
    component.itemTypeControl.setValue('Stores');
    component.actionTypeControl.setValue('Add');
    component.itemType = 'Stores';
    component.actionType = 'Add';
    component.submitItem();
  });

  it('should call regresar', () => {
    component.loginAccess = new LoginModel;
    component.regresar();
    expect(component.loginAccess.role).toEqual('none');
  });

  it('should reset form add store', () => {
    component.itemTypeControl.setValue('Stores');
    component.actionTypeControl.setValue('Add');
    component.itemType = 'Stores';
    component.actionType = 'Add';
    component.adminForm.controls.addressControl.markAsTouched();
    component.adminForm.controls.nameControl.markAsTouched();
    component.adminForm.controls.idControl.markAsTouched();
    component.resetForm();
    expect(component.adminForm.controls.addressControl.invalid).toBe(true);
    expect(component.adminForm.controls.nameControl.invalid).toBe(true);
    expect(component.adminForm.controls.idControl.valid).toBe(true);
  });

  it('should reset form add articles', () => {
    component.itemTypeControl.setValue('Articles');
    component.actionTypeControl.setValue('Add');
    component.itemType = 'Articles';
    component.actionType = 'Add';
    component.adminForm.controls.descriptionControl.markAsTouched();
    component.adminForm.controls.nameControl.markAsTouched();
    component.adminForm.controls.priceControl.markAsTouched();
    component.adminForm.controls.vaultControl.markAsTouched();
    component.adminForm.controls.shelfControl.markAsTouched();
    component.adminForm.controls.storeIdControl.markAsTouched();
    component.resetForm();
    expect(component.adminForm.controls.descriptionControl.invalid).toBe(true);
    expect(component.adminForm.controls.nameControl.invalid).toBe(true);
    expect(component.adminForm.controls.priceControl.invalid).toBe(true);
    expect(component.adminForm.controls.vaultControl.invalid).toBe(true);
    expect(component.adminForm.controls.shelfControl.invalid).toBe(true);
    expect(component.adminForm.controls.storeIdControl.invalid).toBe(true);
  });

  it('should reset form edit store', () => {
    component.itemTypeControl.setValue('Stores');
    component.actionTypeControl.setValue('Edit');
    component.itemType = 'Stores';
    component.actionType = 'Edit';
    component.adminForm.controls.addressControl.markAsTouched();
    component.adminForm.controls.nameControl.markAsTouched();
    component.adminForm.controls.idControl.markAsTouched();
    component.resetForm();
    expect(component.adminForm.controls.addressControl.valid).toBe(true);
    expect(component.adminForm.controls.nameControl.valid).toBe(true);
    expect(component.adminForm.controls.idControl.invalid).toBe(true);
  });

  it('should reset form edit articles', () => {
    component.itemTypeControl.setValue('Articles');
    component.actionTypeControl.setValue('Edit');
    component.itemType = 'Articles';
    component.actionType = 'Edit';
    component.adminForm.controls.descriptionControl.markAsTouched();
    component.adminForm.controls.addressControl.markAsTouched();
    component.adminForm.controls.nameControl.markAsTouched();
    component.adminForm.controls.priceControl.markAsTouched();
    component.adminForm.controls.vaultControl.markAsTouched();
    component.adminForm.controls.shelfControl.markAsTouched();
    component.adminForm.controls.storeIdControl.markAsTouched();
    component.adminForm.controls.idControl.markAsTouched();
    component.resetForm();
    expect(component.adminForm.controls.idControl.invalid).toBe(true);
    expect(component.adminForm.controls.descriptionControl.valid).toBe(true);
    expect(component.adminForm.controls.addressControl.valid).toBe(true);
    expect(component.adminForm.controls.nameControl.valid).toBe(true);
    expect(component.adminForm.controls.priceControl.valid).toBe(true);
    expect(component.adminForm.controls.vaultControl.valid).toBe(true);
    expect(component.adminForm.controls.shelfControl.valid).toBe(true);
    expect(component.adminForm.controls.storeIdControl.valid).toBe(true);
  });
});

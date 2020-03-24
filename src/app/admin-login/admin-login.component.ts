import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { ElipgoService } from '../services/elipgo.service';
import { StoreRequest } from '../models/StoreRequest';
import { ArticleRequest } from '../models/ArticleRequest';
import { StoresResponseModel, StoresInformation } from '../models/StoresResponseModel';
import { ArticlesResponseModel } from '../models/ArticlesResponseModel';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  @Output() returnAccess: EventEmitter<LoginModel> = new EventEmitter();
  @Input() loginAccess: LoginModel;
  itemType: string;
  actionType: string;
  id: number;
  description: string;
  name: string;
  price: number;
  total_in_shelf: number;
  total_in_vault: number;
  store_id: number;
  address: string;
  adminForm: FormGroup;
  response: StoresInformation[]; 

  itemTypeControl: FormControl;
  actionTypeControl: FormControl;
  idControl: FormControl;
  descriptionControl: FormControl;
  nameControl: FormControl;
  priceControl: FormControl;
  shelfControl: FormControl;
  vaultControl: FormControl;
  storeIdControl: FormControl;
  addressControl: FormControl;

  constructor(private elipgoService: ElipgoService, private fb: FormBuilder) {
    this.itemTypeControl = new FormControl('');
    this.actionTypeControl = new FormControl('');
    this.adminForm = this.fb.group({
      idControl: [''],
      addressControl: [''],
      nameControl: [''],
      descriptionControl: [''],
      priceControl: [''],
      shelfControl: [''],
      vaultControl: [''],
      storeIdControl: [''],
    })
  }

  get editMode() {
    return this.actionType === 'Edit' ? true : false;
  }

  submitItem() {
    if (this.editMode) {
      this.itemType === 'Stores' ? this.editStore() : this.editArticle();
    } else {
      this.itemType === 'Stores' ? this.addStore() : this.addArticle();
    }
  }

  resetForm() {
    this.editMode ? this.adminForm.controls.idControl.setValidators(Validators.required) : this.adminForm.controls.idControl.clearValidators();
    this.adminForm.reset();
  }

  editArticle() {
    let request: ArticleRequest;
    request = {
      id: this.id,
      description: this.description,
      name: this.name,
      price: this.price,
      total_in_shelf: this.total_in_shelf,
      total_in_vault: this.total_in_vault,
      store_id: this.store_id
    }
    this.elipgoService.editArticle(this.id, request).subscribe(response => {
      alert(JSON.stringify(response));
    }, error => {
      console.log(error);
    });
  }

  editStore() {
    let request: StoreRequest;
    request = {
      id: this.id,
      name: this.name,
      address: this.address
    }
    this.elipgoService.editStore(this.id, request).subscribe((response: StoresInformation[]) => {
      alert(JSON.stringify(response));
      this.response = response;
    }, error => {
      console.log(error);
    });
  }

  addArticle() {
    let request: ArticleRequest;
    request = {
      description: this.description,
      name: this.name,
      price: this.price,
      total_in_shelf: this.total_in_shelf,
      total_in_vault: this.total_in_vault,
      store_id: this.store_id
    }
    this.elipgoService.addArticle(request).subscribe(response => {
      alert(JSON.stringify(response));
    }, error => {
      console.log(error);
    });
  }

  addStore() {
    let request: StoreRequest;
    request = {
      name: this.name,
      address: this.address
    }
    this.elipgoService.addStore(request).subscribe(response => {
      alert(JSON.stringify(response));
    }, error => {
      console.log(error);
    });
  }

  regresar() {
    this.loginAccess.role = 'none';
    this.returnAccess.emit(this.loginAccess);
  }

}

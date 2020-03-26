import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ElipgoService } from '../services/elipgo.service';
import { StoreRequest } from '../models/StoreRequest';
import { ArticleRequest } from '../models/ArticleRequest';
import { StoresResponseModel } from '../models/StoresResponseModel';

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
  response: any;
  storeRequest: StoreRequest;
  articleRequest: ArticleRequest;

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
    this.adminForm = this.fb.group({
      idControl: ['', Validators.required],
      addressControl: ['', Validators.required],
      nameControl: ['', Validators.required],
      descriptionControl: ['', Validators.required],
      priceControl: [0, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      shelfControl: [0, Validators.required],
      vaultControl: [0, Validators.required],
      storeIdControl: ['', Validators.required],
    })
    this.itemTypeControl = new FormControl('');
    this.actionTypeControl = new FormControl('');
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
    switch (this.itemType) {
      case 'Stores':
        if (this.editMode) {
          this.adminForm.controls.idControl.setValidators(Validators.required);
          this.adminForm.controls.nameControl.clearValidators();
          this.adminForm.controls.addressControl.clearValidators();
        } else {
          this.adminForm.controls.nameControl.setValidators(Validators.required);
          this.adminForm.controls.addressControl.setValidators(Validators.required);
          this.adminForm.controls.idControl.clearValidators();
          this.adminForm.controls.descriptionControl.clearValidators();
          this.adminForm.controls.priceControl.clearValidators();
          this.adminForm.controls.shelfControl.clearValidators();
          this.adminForm.controls.vaultControl.clearValidators();
          this.adminForm.controls.storeIdControl.clearValidators();
        }
        break;
      case 'Articles':
        if (this.editMode) {
          this.adminForm.controls.idControl.setValidators(Validators.required)
          this.adminForm.controls.descriptionControl.clearValidators();
          this.adminForm.controls.addressControl.clearValidators();
          this.adminForm.controls.nameControl.clearValidators();
          this.adminForm.controls.priceControl.clearValidators();
          this.adminForm.controls.shelfControl.clearValidators();
          this.adminForm.controls.vaultControl.clearValidators();
          this.adminForm.controls.storeIdControl.clearValidators();
        } else {
          this.adminForm.controls.idControl.clearValidators();
          this.adminForm.controls.addressControl.clearValidators();
          this.adminForm.controls.nameControl.setValidators(Validators.required);
          this.adminForm.controls.descriptionControl.setValidators(Validators.required);
          this.adminForm.controls.priceControl.setValidators(Validators.required);
          this.adminForm.controls.shelfControl.setValidators(Validators.required);
          this.adminForm.controls.vaultControl.setValidators(Validators.required);
          this.adminForm.controls.storeIdControl.setValidators(Validators.required);
        }
        break;
    }
    this.adminForm.reset();
  }

  editArticle() {
    this.articleRequest = {
      id: this.id,
      description: this.description ? this.description : '',
      name: this.name ? this.name : '',
      price: this.price,
      total_in_shelf: this.total_in_shelf,
      total_in_vault: this.total_in_vault,
      store_id: this.store_id
    }
    this.elipgoService.editArticle(this.id, this.articleRequest).subscribe(response => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  editStore() {
    this.storeRequest = {
      id: this.id,
      name: this.name ? this.name : '',
      address: this.address ? this.address : ''
    }
    this.elipgoService.editStore(this.id, this.storeRequest).subscribe((response: StoresResponseModel) => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  addArticle() {
    this.articleRequest = {
      description: this.description,
      name: this.name,
      price: this.price,
      total_in_shelf: this.total_in_shelf,
      total_in_vault: this.total_in_vault,
      store_id: this.store_id
    }
    this.elipgoService.addArticle(this.articleRequest).subscribe(response => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  addStore() {
    this.storeRequest = {
      name: this.name,
      address: this.address
    }
    this.elipgoService.addStore(this.storeRequest).subscribe(response => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  regresar() {
    this.loginAccess.role = 'none';
    this.returnAccess.emit(this.loginAccess);
  }

}

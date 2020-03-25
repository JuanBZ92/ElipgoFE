import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ElipgoService } from '../services/elipgo.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  @Output() returnAccess: EventEmitter<LoginModel> = new EventEmitter();
  @Input() loginAccess: LoginModel;
  userForm: FormGroup;
  id: number;
  idControl: FormControl;
  itemType: string;
  itemTypeControl: FormControl;
  response: any;

  constructor(private elipgoService: ElipgoService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      idControl: [''],
    })
    this.itemTypeControl = new FormControl('', Validators.required)
  }

  submitItem() {
    if (this.itemType === 'Stores') {
      this.getStoresList();
    } else {
      if (this.id) {
        this.getArticlesByStore(this.id)
      } else {
        this.getArticlesList();
      }
    }
  }

  getStoresList() {
    this.elipgoService.getStoresList().subscribe(response => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  getArticlesList() {
    this.elipgoService.getArticlesList().subscribe(response => {
      this.response = response;
    }, error => {
      this.response = error;
    });
  }

  getArticlesByStore(id: number) {
    this.elipgoService.getArticlesByStore(id).subscribe(response => {
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

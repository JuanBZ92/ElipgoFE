import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginModel } from '../models/LoginModel';
import { ElipgoService } from '../services/elipgo.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() access: LoginModel;
  userAccess: FormGroup;
  username: string;
  password: string;

  constructor(private elipgoService: ElipgoService, private fb: FormBuilder) {
    this.access = { role: 'none', success: false }
    this.userAccess = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  login() {
    this.username = this.userAccess.controls.username.value;
    this.password = this.userAccess.controls.password.value;
    this.elipgoService.login(this.username, this.password).subscribe((response: LoginModel) => {
      this.access = response;
    }, error => {
      console.log(error);
      this.access.role = 'none';
    });
  }

  returnAccess(event: any) {
    this.access = event;
    this.userAccess.controls.username.setValue("");
    this.userAccess.controls.password.setValue("");
  }

}

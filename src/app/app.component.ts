import { Component } from '@angular/core';
import { LoginModel } from './models/LoginModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ElipgoFront';
  access: LoginModel;
  constructor() { 
    this.access = { role: 'none', success: false };
  }
}

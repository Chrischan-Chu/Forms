import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})

export class ReactiveComponent {
  title = "reactive-form";
  username: string = "";
  email: string = "";
  contact: string = "";
  address: string = "";
  comment: string = "";
  formdata: FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    contact: new FormControl(""),
    address: new FormControl(""),
    comment: new FormControl("")
  });

  onClickSubmit(data: { username: string, email: string, contact: string, address: string, comment: string}) {
    this.username = data.username;
    this.email = data.email;
    this.contact = data.contact;
    this.address = data.address;
    this.comment = data.comment;
  }
}

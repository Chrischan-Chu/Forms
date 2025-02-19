import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  imports : [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  title = 'forms';
  username: string = "";
  email: string = "";
  contact: string = "";
  address: string = "";
  comment: string = "";

  submitted: boolean = false;
  
  onSubmit() {
    this.submitted = true;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  }


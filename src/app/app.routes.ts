import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';


export const routes: Routes = [
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'reactive-validation', component: ReactiveValidationComponent }, 
];

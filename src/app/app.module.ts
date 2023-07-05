import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormValBlocComponent } from './form-val-bloc/form-val-bloc.component';

@NgModule({
  declarations: [AppComponent, FormComponent, FormValBlocComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

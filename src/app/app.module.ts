import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { Binding2Component } from './binding2/binding2.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HtmlAttributeComponent } from './html-attribute/html-attribute.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    Binding2Component,
    NgForComponent,
    HtmlAttributeComponent,
    FormInputComponent,
    NgClassComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { Binding2Component } from './binding2/binding2.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HtmlAttributeComponent } from './html-attribute/html-attribute.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { Binding2RadioComponent } from './binding2-radio/binding2-radio.component';
import { InputKeyupComponent } from './input-keyup/input-keyup.component';
import { Binding2SelectionComponent } from './binding2-selection/binding2-selection.component';
import { RouterModule } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { DiaglogComponent } from './diaglog/diaglog.component';

@NgModule({
  declarations: [
    AppComponent,

    BindingComponent,
    Binding2Component,
    NgForComponent,
    HtmlAttributeComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    NgSwitchComponent,
    Binding2RadioComponent,
    InputKeyupComponent,
    Binding2SelectionComponent,
    TextEditorComponent,
    DiaglogComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { DiaglogComponent } from './diaglog/diaglog.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { Binding2SelectionComponent } from './binding2-selection/binding2-selection.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { InputKeyupComponent } from './input-keyup/input-keyup.component';
import { HtmlAttributeComponent } from './html-attribute/html-attribute.component';
import { Binding2RadioComponent } from './binding2-radio/binding2-radio.component';
import { Binding2Component } from './binding2/binding2.component';
import { BindingComponent } from './binding/binding.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 *  Typescript Object array => syntax giống Json (tường minh {"key": "value"})
 * cú pháp giống Json Array. Mỗi item là 1 Route
 * đấy là route cấp 1 của App.
 */
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'binding' },
  { path: 'binding', component: BindingComponent },
  { path: 'binding-2way', component: Binding2Component },
  { path: 'binding-radio', component: Binding2RadioComponent },
  { path: 'binding-selection', component: Binding2SelectionComponent },
  { path: 'html-attribute', component: HtmlAttributeComponent },
  { path: 'input-keyup', component: InputKeyupComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'text-editor', component: TextEditorComponent },
  { path: 'dialog', component: DiaglogComponent },
];

@NgModule({
  /**
   * route bản chất là 1 module vì thế cần import
   * RouterModule.forRoot(): chỉ đc call 1 lần duy nhất trong App. Còn lại là RouterModule.forChild() ở các module khác
   */
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

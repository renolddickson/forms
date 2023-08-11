import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GeneratorComponent } from './generator/generator.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { FormComponent } from './components/form/form.component';
import { EditorComponent } from './components/editor/editor.component';



@NgModule({
  declarations: [
    MainComponent,
    GeneratorComponent,
    NavComponent,
    DashboardComponent,
    SearchComponent,
    PluginsComponent,
    FormComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }

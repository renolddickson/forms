import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

const Material = [
  MatToolbarModule,
  FlexLayoutModule,
  MatButtonModule,
  AppRoutingModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  MatMenuModule,
  ReactiveFormsModule,
  MatDividerModule,
  MatSidenavModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [Material]
})
export class MaterialModule { }

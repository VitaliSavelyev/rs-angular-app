import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OptionsComponent } from './options/options.component';



@NgModule({
  declarations: [
    ProfileComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }

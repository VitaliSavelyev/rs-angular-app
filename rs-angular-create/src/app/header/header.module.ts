import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { OptionsComponent } from './options/options.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProfileComponent,
    OptionsComponent
  ],
  exports: [
    OptionsComponent,
    ProfileComponent,
    SharedModule
  ],
  imports: [
  ],
})
export class HeaderModule { }

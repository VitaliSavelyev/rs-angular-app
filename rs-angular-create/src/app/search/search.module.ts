import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {SearchComponent} from "./search.component";

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [SharedModule]
})
export class SearchModule { }

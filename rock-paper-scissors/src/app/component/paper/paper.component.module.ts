import { NgModule } from '@angular/core';
import { PaperComponent } from './paper.component';

const components = [PaperComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class PaperModule {}

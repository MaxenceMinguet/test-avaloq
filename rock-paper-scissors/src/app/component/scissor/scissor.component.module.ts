import { NgModule } from '@angular/core';
import { ScissorComponent } from './scissor.component';

const components = [ScissorComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class ScissorModule {}

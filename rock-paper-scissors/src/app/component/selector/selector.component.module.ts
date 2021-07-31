import { NgModule } from '@angular/core';
import { SelectorComponent } from './selector.component';

const components = [SelectorComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class SelectorModule {}

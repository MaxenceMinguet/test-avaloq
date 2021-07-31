import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';

const components = [ContainerComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class ContainerModule {}

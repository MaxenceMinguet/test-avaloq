import { NgModule } from '@angular/core';
import { RockComponent } from './rock.component';

const components = [RockComponent];

@NgModule({
  declarations: components,
  exports: components,
})
export class RockModule {}

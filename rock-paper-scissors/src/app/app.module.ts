import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaperModule } from './component/paper/paper.component.module';
import { RockModule } from './component/rock/rock.component.module';
import { ScissorModule } from './component/scissor/scissor.component.module';
import { ContainerModule } from './component/container/container.component.module';
import { SelectorModule } from './component/selector/selector.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RockModule, ScissorModule, PaperModule, ContainerModule, SelectorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

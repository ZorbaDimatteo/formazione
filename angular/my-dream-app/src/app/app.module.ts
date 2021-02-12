import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDreamComponentComponent } from './my-dream-component/my-dream-component.component';
import { MyDreamPipePipe } from './my-dream-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyDreamComponentComponent,
    MyDreamPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

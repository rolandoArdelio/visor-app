import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { AppState } from './app.service';

import { AppComponent } from './app.component';
import { ViewersModule } from './viewers/viewers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {  
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
 }

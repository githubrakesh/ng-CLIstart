import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './app.pagenotfound.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './containers/app/app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent, AppNavComponent],
  imports: [BrowserModule, AppRoutingModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

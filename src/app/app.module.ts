import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './containers/app/app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// Modules
import { CoreModule } from './landing-page/core/core.module';

@NgModule({
  declarations: [AppComponent, AppNavComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
})
export class AppModule {}

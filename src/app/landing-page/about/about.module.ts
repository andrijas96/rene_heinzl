import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AboutComponent } from './containers/about/about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

@NgModule({
  declarations: [AboutComponent, AboutCardComponent],
  imports: [CommonModule],
  exports: [AboutComponent],
})
export class AboutModule {}

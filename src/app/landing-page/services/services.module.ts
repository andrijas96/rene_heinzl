import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ServicesComponent } from './containers/services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule],
  exports: [ServicesComponent],
})
export class ServicesModule {}

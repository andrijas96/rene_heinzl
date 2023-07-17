import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ServicesComponent } from './containers/services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule],
  exports: [ServicesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesModule {}

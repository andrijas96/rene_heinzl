import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ContactComponent } from './containers/contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule],
  exports: [ContactComponent],
})
export class ContactModule {}

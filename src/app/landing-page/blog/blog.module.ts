import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BlogComponent } from './containers/blog/blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule],
  exports: [BlogComponent],
})
export class BlogModule {}

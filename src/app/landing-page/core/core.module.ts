import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CoreComponent } from './contianers/core/core.component';

// Modules
import { HomeModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';
import { ServicesModule } from '../services/services.module';
import { TrackRecordModule } from '../track-record/track-record.module';
import { BlogModule } from '../blog/blog.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    TrackRecordModule,
    BlogModule,
    ContactModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}

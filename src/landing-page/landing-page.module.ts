import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { TrackRecordModule } from './track-record/track-record.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    TrackRecordModule,
    BlogModule,
    ContactModule,
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}

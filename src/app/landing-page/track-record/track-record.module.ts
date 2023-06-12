import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TrackRecordComponent } from './containers/track-record/track-record.component';
import { TrackCardComponent } from './components/track-card/track-card.component';

@NgModule({
  declarations: [TrackRecordComponent, TrackCardComponent],
  imports: [CommonModule],
  exports: [TrackRecordComponent],
})
export class TrackRecordModule {}

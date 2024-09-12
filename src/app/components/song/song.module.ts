import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SongComponent } from './song.component';

@NgModule({
  declarations: [SongComponent],
  exports: [SongComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SongModule {}

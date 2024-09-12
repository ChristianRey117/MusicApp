import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListSongsComponent } from './list-songs.component';
import { SongModule } from '../song/song.module';

@NgModule({
  declarations: [ListSongsComponent],
  exports: [ListSongsComponent],
  imports: [CommonModule, FormsModule, IonicModule, SongModule],
})
export class ListSongsModule {}

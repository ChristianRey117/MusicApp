import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongSelectedPageRoutingModule } from './song-selected-routing.module';

import { SongSelectedPage } from './song-selected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongSelectedPageRoutingModule
  ],
  declarations: [SongSelectedPage]
})
export class SongSelectedPageModule {}

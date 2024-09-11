import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ListSongsModule } from '../components/list-songs/list-songs.module';
import { ListSongsComponent } from '../components/list-songs/list-songs.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListSongsModule],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

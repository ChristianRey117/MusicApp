import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongSelectedPage } from './song-selected.page';

const routes: Routes = [
  {
    path: ':id',
    component: SongSelectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongSelectedPageRoutingModule {}

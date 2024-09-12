import { Component } from '@angular/core';
import { ISong } from '../interfaces/list-songs.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  listSongs: Array<ISong> = [
    {
      id: 1,
      image: '/assets/images/portada.jpg',
      nameSong: 'Name Song',
      nameArtist: 'Name Artist',
    },
    {
      id: 2,
      image: '/assets/images/portada.jpg',
      nameSong: 'Name Song',
      nameArtist: 'Name Artist',
    },
    {
      id: 3,
      image: '/assets/images/portada.jpg',
      nameSong: 'Name Song',
      nameArtist: 'Name Artist',
    },
    {
      id: 4,
      image: '/assets/images/portada.jpg',
      nameSong: 'Name Song',
      nameArtist: 'Name Artist',
    },
  ];
  constructor() {}
}

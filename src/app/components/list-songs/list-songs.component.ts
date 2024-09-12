import { Component, Input, OnInit } from '@angular/core';
import { ISong } from 'src/app/interfaces/list-songs.interface';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss'],
})
export class ListSongsComponent implements OnInit {
  @Input() listOfSongs: Array<ISong>;
  constructor() {}

  ngOnInit() {
    console.log('List of songs---------->', this.listOfSongs);
  }
}

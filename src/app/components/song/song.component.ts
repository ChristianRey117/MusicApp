import { Component, Input, OnInit } from '@angular/core';
import { ISong } from 'src/app/interfaces/list-songs.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() song: ISong;
  constructor() {}

  ngOnInit() {}
}

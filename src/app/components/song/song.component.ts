import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISong } from 'src/app/interfaces/list-songs.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() song: ISong;
  constructor(private readonly _router:Router) {}

  ngOnInit() {}

  selectSong(id:number):void{
    this._router.navigate(["/song-selected/" +id.toString()])
  }
}

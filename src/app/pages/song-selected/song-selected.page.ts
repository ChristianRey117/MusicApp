import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-selected',
  templateUrl: './song-selected.page.html',
  styleUrls: ['./song-selected.page.scss'],
})
export class SongSelectedPage implements OnInit {
  songInfo = this._router.getCurrentNavigation()?.extras.state.song;
  constructor(private readonly _router:Router) { }

  ngOnInit() {
    console.log("SONG INFO--->", this.songInfo)
  }

}

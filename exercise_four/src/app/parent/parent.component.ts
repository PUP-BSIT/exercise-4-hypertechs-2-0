// parent.component.ts
import { Component } from '@angular/core';
import { Music } from '../../model/music';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  musicList: Music[] = [];
  newMusic: Music = { id: 0, title: '', artist: '', genre: '', releaseYear: 0 };
  tempMusic: Music = { id: 0, title: '', artist: '', genre: '', releaseYear: 0 };
  isEditing: boolean = false;

  addMusicItem() {
    // Assign a unique ID to the new music item (you may need to adjust this logic)
    this.newMusic.id = this.musicList.length + 1;
    // Copy data from tempMusic to newMusic
    Object.assign(this.newMusic, this.tempMusic);
    // Add the new music item to the musicList array
    this.musicList.push(this.newMusic);
    // Reset the tempMusic and newMusic objects to clear the form
    this.tempMusic = { id: 0, title: '', artist: '', genre: '', releaseYear: 0 };
    this.newMusic = { id: 0, title: '', artist: '', genre: '', releaseYear: 0 };
  }
}

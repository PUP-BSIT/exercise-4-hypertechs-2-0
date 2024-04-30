// parent.component.ts
import { Component } from '@angular/core';
import { Music } from '../../model/music';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  musicList: Music[] = [
    { id: 1, title: 'Backstreet Freestyle', artist: 'Kendrick Lamar', 
      genre: 'Hip-Hop', releaseYear: 2012 },
    { id: 2, title: 'Only Ones Who Know', artist: 'Arctic Monkeys', 
      genre: 'Alternative', releaseYear: 2007 },
    { id: 1, title: 'Wicked Games', artist: 'The Weeknd', 
      genre: 'R&B', releaseYear: 2011 },
  ];
  newMusic: Music = { id: 0, title: '', artist: '', genre: '', 
    releaseYear: 0 };
  tempMusic: Music = { id: 0, title: '', artist: '', genre: '', 
    releaseYear: 0 };
  isEditing: boolean = false;
  lastIndex: number = -1;

  addMusicItem() {
    
    this.newMusic.id = this.musicList.length + 1;
   
    Object.assign(this.newMusic, this.tempMusic);
  
    this.musicList.push(this.newMusic);
   
    this.tempMusic = { id: 0, title: '', artist: '', genre: '', 
      releaseYear: 0 };
    this.newMusic = { id: 0, title: '', artist: '', genre: '', releaseYear: 0 };
    this.lastIndex = this.musicList.length - 1;
  }

  editMusicItem(musicItem: Music) {
    this.isEditing = true;
    Object.assign(this.newMusic, musicItem);
  }

  saveMusicItem() {
    this.isEditing = false;
    Object.assign(this.musicList[this.lastIndex], this.newMusic);
  }

  deleteMusicItem(musicItem: Music) {
    const index = this.musicList.indexOf(musicItem);
    this.musicList.splice(index, 1);
  }
}



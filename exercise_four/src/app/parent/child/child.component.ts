import { Component, Input } from '@angular/core';
import { Music } from '../../../model/music';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() music: Music;
}

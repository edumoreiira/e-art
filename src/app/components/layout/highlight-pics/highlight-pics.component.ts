import { Component, Input } from '@angular/core';
import { HighlightPictures } from '../../../models/highlight-pictures.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlight-pics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlight-pics.component.html',
  styleUrl: './highlight-pics.component.scss'
})

export class HighlightPicsComponent {

  protected _pictures: HighlightPictures[] = Array(5).fill(null);

  @Input({required: true})
  set pictures(pics: HighlightPictures[]) {
    if(pics.length === 5) {
      this._pictures = pics;
    } else {
      console.error("Highlight component must have exactly 5 pictures")
    }
  }

}

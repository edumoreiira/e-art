import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
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

  @ViewChildren('pictures') pictureElements!: QueryList<ElementRef>
  protected _pictures: HighlightPictures[] = Array(5).fill(null);

  @Input({required: true})
  set pictures(pics: HighlightPictures[]) {
    if(pics.length === 5) {
      this._pictures = pics;
    } else {
      console.error("Highlight component must have exactly 5 pictures")
    }
  }

  onImageEnter(event: MouseEvent) {
    const hoveredImage = event.target as HTMLElement;

    this.pictureElements.forEach((pictureRef => {
      const picture = pictureRef.nativeElement as HTMLElement;
      picture.classList.remove('pic--wide')
    }))

    hoveredImage.classList.add('pic--wide')
  }

  onImageLeave() {
    const pictures = this.pictureElements.toArray();
    pictures.forEach(picture => picture.nativeElement.classList.remove('pic--wide'));
    pictures[2].nativeElement.classList.add('pic--wide');
  }
  
}



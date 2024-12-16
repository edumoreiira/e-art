import { Component } from '@angular/core';
import { HighlightPicsComponent } from "../../components/layout/highlight-pics/highlight-pics.component";
import { HighlightPictures } from '../../models/highlight-pictures.interface';
import { ButtonComponent } from "../../components/base/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightPicsComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  highlightPictures: HighlightPictures[] = [
    {
      art: 'Arte 01',
      artist: 'Artista 01',
      img: './images/highlight/img1.png'
    }
  ,
  {
    art: 'Arte 02',
    artist: 'Artista 02',
    img: './images/highlight/img2.png'
  },
  {
    art: 'Arte 03',
    artist: 'Artista 03',
    img: './images/highlight/img3.png'
  },
  {
    art: 'Arte 04',
    artist: 'Artista 04',
    img: './images/highlight/img4.png'
  },
  {
    art: 'Arte 05',
    artist: 'Artista 05',
    img: './images/highlight/img5.png'
  }
  ]
}

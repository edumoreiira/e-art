import { Component, input } from '@angular/core';

type ButtonType = 'highlight' | 'none'
@Component({
  selector: 'button[custom]',
  standalone: true,
  template: `
  <ng-content></ng-content>
  
  `,
  host: {
    '[class.highlight]': 'group() == "highlight"'
  },
  imports: [],
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  group = input<ButtonType>()
}

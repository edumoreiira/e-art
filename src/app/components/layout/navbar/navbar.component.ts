import { Component, HostListener } from '@angular/core';
import { slideUpDown } from '../../../animations/basic.animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [slideUpDown]
})
export class NavbarComponent {
  expanded = false;
  isMobile = false;

  ngOnInit() {
    if(typeof window !== 'undefined') {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 640;
  }

  toggleNavbar() {
    this.expanded = !this.expanded;
  }

}

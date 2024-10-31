import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/layout/navbar/navbar.component";

@Component({
  selector: 'app-portal-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.scss'
})
export class PortalLayoutComponent {

}

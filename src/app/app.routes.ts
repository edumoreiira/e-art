import { Routes } from '@angular/router';
import { PortalLayoutComponent } from './pages/portal-layout/portal-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: PortalLayoutComponent,
        children: [
            { path: '', component: HomeComponent}
        ]
     },
];

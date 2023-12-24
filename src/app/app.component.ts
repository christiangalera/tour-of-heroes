import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'pi pi-star-fill',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
      severity: "primary"
    },
    {
      icon: 'pi pi-map',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
      severity: 'warning'
    }
  ]
}  


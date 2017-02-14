import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  views: Object[] = [
    { 
      name: 'Categories',
      description: 'Manage your categories',
      icon: 'settings'
    }
  ]
}

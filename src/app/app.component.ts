import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  formShowing: boolean = false;
  views: Object[] = [
    { 
      name: 'Categories',
      description: 'Manage your categories',
      icon: 'settings'
    }
  ]

  onAddExpence(expence, expencesList){
    expencesList.expences.push(expence);
  }
}

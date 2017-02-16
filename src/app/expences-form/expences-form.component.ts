import { Component, OnInit } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { Expence } from '../expence';

@Component({
  selector: 'expences-form',
  templateUrl: './expences-form.component.html',
  styleUrls: ['./expences-form.component.css'],
  providers: [ ExpencesService ]
})
export class ExpencesFormComponent implements OnInit {
  expence = new Expence(1, 'comment', 'cat3', new Date());

  constructor(private _expenceService: ExpencesService) { }

  ngOnInit() {
  }
  
  onAddClick(form){
    var expence = new Expence(
      form['amount'].value, 
      form['comment'].value, 
      form['category'].value, 
      form['date'].value
    );

    this._expenceService.add(expence);
  }
}

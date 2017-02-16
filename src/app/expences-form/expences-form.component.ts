import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { Expence } from '../expence';

@Component({
  selector: 'expences-form',
  templateUrl: './expences-form.component.html',
  styleUrls: ['./expences-form.component.css'],
  providers: [ ExpencesService ]
})
export class ExpencesFormComponent implements OnInit {

  @Output()
  addExpence: EventEmitter<Expence> = new EventEmitter<Expence>();

  expence = new Expence(1, 'comment', 'cat3', new Date());

  constructor(private _expenceService: ExpencesService) { }

  ngOnInit() {
  }
  
  onAddClick(form){
    
    var expence = new Expence(
      form['amount'].value, 
      form['comment'].value, 
      null,// form['category'] is null  
      form['date'].value
    );

    this._expenceService.add(expence);
    this.addExpence.emit(expence);
  }
}

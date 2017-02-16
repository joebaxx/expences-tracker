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
  _amount: number = 4;
  _comment: string = 'comment';
  _date: Date = new Date();
  _category: string;

  constructor(private _expenceService: ExpencesService) { }

  ngOnInit() {
  }
  
  onAddClick(form){
    
    var expence = new Expence(
      this._amount,
      this._comment,
      this._category,
      this._date
    );

    this._expenceService.add(expence);
    this.addExpence.emit(expence);
    this.cleanValues();
  }

  cleanValues(){
    this._amount = 0;
    this._comment = '';
    this._category = '';
    this._date = new Date();
  }
}

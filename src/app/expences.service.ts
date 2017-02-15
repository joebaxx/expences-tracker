import { Injectable } from '@angular/core';
import { Expence } from './expence';

@Injectable()
export class ExpencesService {
  expences: Expence[] = [
      new Expence(10, 'Comment 1', 'Category1', new Date()),
      new Expence(25, 'Comment 2', 'Category2', new Date()),
      new Expence(38, 'Comment 3', 'Category3', new Date())
  ];

  constructor() { }

  get(){
    return this.expences;
  }

  add(expence: Expence){
    this.expences.push(expence);
  }

}

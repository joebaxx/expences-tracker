import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expences-list',
  templateUrl: './expences-list.component.html',
  styleUrls: ['./expences-list.component.css']
})
export class ExpencesListComponent implements OnInit {
  expences: any[];
  constructor() { }

  ngOnInit() {
  this.expences = [
    {
      date: new Date(),
      amount: 10,
      comment: 'Comment 1.',
      category: 'Food'
    },
    {
      date: new Date(),
      amount: 54.6,
      comment: 'Comment 2.',
      category: 'Food'
    }
  ]

  }

}

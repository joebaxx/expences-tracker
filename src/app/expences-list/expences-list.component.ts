import { Component, OnInit } from '@angular/core';
import { ExpencesService } from '../expences.service';

@Component({
  selector: 'expences-list',
  templateUrl: './expences-list.component.html',
  styleUrls: ['./expences-list.component.css'],
  providers: [ ExpencesService ]
})
export class ExpencesListComponent implements OnInit {
  expences: any[];
  
  constructor(private _expenceService: ExpencesService) { }

  ngOnInit() {
    this.expences = this._expenceService.get();
  }

}

import { Component, OnInit } from '@angular/core';

import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  'title' : string;
  'expenseEntry' : ExpenseEntry;

  date: Date | undefined; 
  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnInit(): void {

    this.title = 'FOOD WEBSITE';
    this.expenseEntry = {

      id : 1,
      item : 'Burger',
      amount : 200,
      quantity : 10,
      category : 'Food',
      location : 'Kolkata',
      spendOn : new Date(2022,5,1,6,5,2),
      createdOn : new Date(2022,5,1,6,5,2)
    };

  }

}


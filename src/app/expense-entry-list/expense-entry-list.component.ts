import { Component, OnInit } from '@angular/core';

import { ExpenseEntry } from '../expense-entry';

import { DebugService } from '../debug.service';

import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css'],
  providers: [DebugService]
})
export class ExpenseEntryListComponent implements OnInit {

  getExpenseEntries() : ExpenseEntry[] {

    let mockExpenseEntries : ExpenseEntry[] = [

      {
        id : 1,
        item : 'Pizza',
        category : 'Food',
        location : 'Kolkata',
        amount : Math.floor(Math.random()*10 + 1),
        spendOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        createdOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        quantity : Math.floor(Math.random()*10 + 1)
      },

      {
        id : 1,
        item : 'Pizza',
        category : 'Food',
        location : 'Delhi',
        amount : Math.floor(Math.random()*10 + 1),
        spendOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        createdOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        quantity : Math.floor(Math.random()*10 + 1)
      },

      {
        id : 1,
        item : 'Pizza',
        category : 'Food',
        location : 'Pune',
        amount : Math.floor(Math.random()*10 + 1),
        spendOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        createdOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        quantity : Math.floor(Math.random()*10 + 1)
      },

      {
        id : 1,
        item : 'Pizza',
        category : 'Food',
        location : 'Bihar',
        amount : Math.floor(Math.random()*10 + 1),
        spendOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        createdOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        quantity : Math.floor(Math.random()*10 + 1)
      },

      {
        id : 1,
        item : 'Pizza',
        category : 'Food',
        location : 'Bankura',
        amount : Math.floor(Math.random()*10 + 1),
        spendOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        createdOn : new Date(2022,13,Math.floor(Math.random()*30 + 1)),
        quantity : Math.floor(Math.random()*10 + 1)
      }

    ];

    return mockExpenseEntries;
  }

  'title' : string;
  'expenseEntries' : ExpenseEntry[];

  constructor( private debugService : DebugService, private restService : ExpenseEntryService ) { }

  ngOnInit(): void {

    this.debugService.info("Expense Entry List Component");

    this.title = 'Expense Entry List';
    this.expenseEntries = this.getExpenseEntryItems();
  }

  getExpenseEntryItems() {

    this.restService.getExpenseEntries().subscribe(data => this.expenseEntries = data);

  }

}

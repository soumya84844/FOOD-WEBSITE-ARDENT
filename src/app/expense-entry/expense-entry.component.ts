import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  'title' : string;
  'expenseEntry$' : Observable<ExpenseEntry>;
  'expenseEntry' : ExpenseEntry = {} as ExpenseEntry;
  'selectedId' : number;

  // date: Date | undefined; 
  constructor(private restService : ExpenseEntryService, private router : Router, private route : ActivatedRoute) {
    // setInterval(() => {
    //   this.date = new Date()
    // }, 1000)
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

    this.expenseEntry$ = this.route.paramMap.pipe(

      switchMap(params => {

        this.selectedId = Number(params.get('id'));
        return this.restService.getExpenseEntry(this.selectedId);

      })

    );

    this.expenseEntry$.subscribe((data) => this.expenseEntry = data);

  }

  goToList() {

    this.router.navigate(['/expenses'])

  }

}


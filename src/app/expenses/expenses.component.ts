import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { BudgetElement } from '../models/budget-element';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expensesForm: FormGroup;
  item: BudgetElement;
  expensesList: BudgetElement[] = [];
  @Output() expensesSubmitted: EventEmitter<BudgetElement> = new EventEmitter<BudgetElement>();

  constructor( private formBuilder: FormBuilder) { 
    this.expensesForm = this.formBuilder.group({
    amount: [''],
    description: ''
    });
} 

  ngOnInit(): void {
  }
  onSubmit(expensesForm: BudgetElement) {
    this.expensesList.push(expensesForm);
    this.expensesForm.reset();
    this.expensesSubmitted.emit(expensesForm);
  }

}

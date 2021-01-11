import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { BudgetElement } from '../models/budget-element';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})

export class IncomesComponent implements OnInit {
  incomesForm: FormGroup;
  incomesList: BudgetElement[] = [];
  item: BudgetElement;
  @Output() incomeSubmitted: EventEmitter<BudgetElement> = new EventEmitter<BudgetElement>();

  constructor( private formBuilder: FormBuilder) { 
      this.incomesForm = this.formBuilder.group({
      amount: [''],
      description: ''
      });
  } 
  

  ngOnInit(): void {
  }
  onSubmit(incomesForm: BudgetElement){
    this.incomesList.push(incomesForm);
    this.incomesForm.reset();
    this.incomeSubmitted.emit(incomesForm);

  }

}

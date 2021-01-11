import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  remainingIncome: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  updateRemainingIncome(budgetItem, type){
    if(type=="income"){
      this.remainingIncome += budgetItem.amount;
    } else {
      this.remainingIncome -= budgetItem.amount;
    }
  }

}

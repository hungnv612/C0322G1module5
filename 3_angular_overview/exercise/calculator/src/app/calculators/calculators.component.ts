import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {
  number1: number;
  number2: number;
  operator = '+';
  color = '';

  calculate(operator: string) {
    switch (operator) {
      case '+':
        return this.number1 + this.number2;
      case '-':
        return this.number1 - this.number2;
      case '*':
        return this.number1 * this.number2;
      case '/':
        if (this.number2 === 0) {
          return 'number2 != 0';
        }
        return this.number1 / this.number2;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

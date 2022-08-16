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

  calculate(number1: number, number2: number, operator: string) {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        if (number2 === 0) {
          return 'number2 != 0';
        }
        return number1 / number2;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

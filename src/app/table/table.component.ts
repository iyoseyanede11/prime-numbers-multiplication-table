import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createPrimeFigs(10)
  }
   primeNumbers = [];


  createPrimeFigs(limit: number){
    // create an array of prime numbers between 2 to a specified limit
    for (let numerator = 1; numerator <= limit; numerator++) {
      let notPrimeNumber = false;
      for (let denominator = 2; denominator <= numerator; denominator++) {
          if (numerator % denominator === 0 && denominator !== numerator) {
              notPrimeNumber = true;
          }
      }
      if (notPrimeNumber === false)
        this.primeNumbers.push(numerator)
      }
    this.createTable();
  }

  createTable(){
    const table = document.getElementById('prime-table');
    let body = '';
    this.primeNumbers.map(value => {
      body += '<tr>'
      this.primeNumbers.map(multiplier => {
        if(value == 1 && multiplier == 1)
          body += '<th>X</th>'
        else
          body += `<td> ${value * multiplier} </td>`;
      })
      body += '</tr>'
    })
    table.innerHTML = body;
  }
}

import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, Input} from '@angular/core';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private iService:InvestmentService){}
  result = computed(()=> this.iService.resultData());
//  investmentInput= input<{
//   year:number,
//   interest:number,
//   valueEndOfYear:number;
//   annualInvestment:number;
//   totalInterest:number;
//   totalAmountInvested:number
//  }[]>()

  // @Input() investmentInput?: {
  //   year:number,
  //   interest:number,
  //   valueEndOfYear:number;
  //   annualInvestment:number;
  //   totalInterest:number;
  //   totalAmountInvested:number
  // }[] ;

}

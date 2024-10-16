import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new  EventEmitter<InvestmentInput>();
// calculate =output<InvestmentInput>()
constructor(private IService:InvestmentService){}
  initialinvestment= signal("0");
  annualinvestment=signal("0");
  exceptedreturn=signal("5");
  duration=signal("10");
  
  onSubmit(){
    this.IService.OncalculateInvestmentResults({
      initialInvestment: Number(this.initialinvestment()),
      duration: Number(this.duration()),
      expectedReturn:Number(this.exceptedreturn()),
      annualInvestment:Number(this.annualinvestment())
    })
   this.initialinvestment.set('0');
   this.annualinvestment.set("0");
   this.exceptedreturn.set("5");
   this.duration.set("10");
  }
}

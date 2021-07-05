import {Component, Input, OnInit} from '@angular/core';
import {CardItemInterface} from "../../../interfaces/card-item-interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  avgBet: number
  @Input()
  cardListItem: CardItemInterface

  bet = new FormControl(0.01, [Validators.required,Validators.min(0.01)]);

  chosenAnswer = new FormControl('', Validators.required);

  myForm = new FormGroup({
    bet: this.bet,
    answer: this.chosenAnswer
  })

  constructor() {
  }

  ngOnInit(): void {
    this.avgBetCalculator();
  };


  avgBetCalculator() {
    let sumPaY = 0
    this.cardListItem.parcipiantAnswers.forEach(value => {
      sumPaY += value.payToken
    })
    this.avgBet = +(sumPaY / this.cardListItem.parcipiantAnswers.length).toFixed(2)
  };

  madeBet() {

    if (this.myForm.valid) {
      console.log(
        {
          eventId:this.cardListItem.id,
          question:this.cardListItem.question,
          bet: this.bet.value,
          answer: this.chosenAnswer.value
        });
      alert('Your bet info logged');
      return;
    }
    alert('Form is not valid.' +
      'Pls Choose your answer and make your bet(min 0,01)');
  }
  // madeBet() {
  //   console.log(this.myForm)
  // }
}

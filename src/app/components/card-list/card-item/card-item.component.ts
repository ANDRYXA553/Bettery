import {Component, Input, OnInit} from '@angular/core';
import {CardItemInterface} from "../../../interfaces/card-item-interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
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

  };


  makeBet() {

    if (this.myForm.valid) {
      console.log(
        {
          eventId:this.cardListItem.id,
          question:this.cardListItem.question,
          bet: this.bet.value,
          answer: this.chosenAnswer.value
        });
      return;
    }
  };
}

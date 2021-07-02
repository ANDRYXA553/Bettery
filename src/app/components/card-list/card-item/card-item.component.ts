import {Component, Input, OnInit} from '@angular/core';
import {CardItemInterface} from "../../../interfaces/card-item-interface";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  avgBet: number
  @Input()
  cardListItem: CardItemInterface

  constructor() {
  }

  ngOnInit(): void {
    let sumPaY = 0
    this.cardListItem.parcipiantAnswers.forEach(value => {
      sumPaY += value.payToken
    })
    this.avgBet = +(sumPaY / this.cardListItem.parcipiantAnswers.length).toFixed(2)
  }

}

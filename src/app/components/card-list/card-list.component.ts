import {Component, OnInit} from '@angular/core';
import {DataFetchService} from "../../services/data-fetch.service";
import {DataTransferService} from "../../services/data-transfer.service";
import {CardItemInterface} from "../../interfaces/card-item-interface";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardList: CardItemInterface[]

  constructor(private dataFetchService: DataFetchService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataFetchService.getData().subscribe(value => {
      this.dataTransfer.store.next(value)
    })
    this.dataTransfer.store.subscribe(value => {
      console.log(value)
      this.cardList = value
    })
  }

}

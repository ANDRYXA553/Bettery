import {Component, OnInit} from '@angular/core';
import {DataFetchService} from "../../services/data-fetch.service";
import {DataTransferService} from "../../services/data-transfer.service";
import {CardItemInterface} from "../../interfaces/card-item-interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardList: CardItemInterface[]
  searchData: string
  page = 1
  totalItems: number

  constructor(private dataFetchService: DataFetchService, private dataTransfer: DataTransferService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.setDataFromDataTransfer()
    this.sortDataByParams()
  }


  setDataFromDataTransfer() {
    this.dataTransfer.store.subscribe(value => {
      this.searchData = value.searchedData
      this.cardList = value.data.filter(value => {
        return value.question.toLocaleLowerCase().includes(this.searchData.toLocaleLowerCase())
      })
      this.totalItems = this.cardList.length;
      console.log(this.cardList)
    })

  }

  sortDataByParams() {
    this.activatedRoute.params.subscribe(value => {
      if (value.sortType === 'trending') {
        this.dataTransfer.store.subscribe(value => {
          this.cardList = value.data.sort((a, b) => {
            if (a.room.eventAmount > b.room.eventAmount) {
              return -1
            }
            if (a.room.eventAmount < b.room.eventAmount) {

              return 1
            }
            return 0
          })
        })
      }
      if (value.sortType === 'controversial') {
        this.dataTransfer.store.subscribe(value => {
          this.cardList = value.data.sort((a, b) => {
            if (a.controversial > b.controversial) {
              return -1
            }
            if (a.controversial < b.controversial) {

              return 1
            }
            return 0
          })
        })

      }
      if (value.sortType === 'following') {
        this.dataTransfer.store.subscribe(value => {

          this.cardList = value.data.filter(value => value.finalAnswer !== null)
        })

      }
    })

  }
}

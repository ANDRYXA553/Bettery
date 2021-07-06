import {Component, OnInit} from '@angular/core';
import {DataFetchService} from "../../services/data-fetch.service";
import {DataTransferService} from "../../services/data-transfer.service";
import {CardItemInterface} from "../../interfaces/card-item-interface";
import {ActivatedRoute} from "@angular/router";
import {CardListService} from "../../services/card-list.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardList: CardItemInterface[];
  searchData: string;
  page = 1;
  totalItems: number;

  constructor(private dataFetchService: DataFetchService,
              private cardListService: CardListService,
              private dataTransfer: DataTransferService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.setDataFromDataTransfer();

    this.activatedRoute.params.subscribe(value1 => {

      this.dataTransfer.store.subscribe(value2 => {

        this.cardList = this.cardListService.sortDataByParams(value2.data, value1,this.searchData).cardList;
        this.totalItems = this.cardListService.sortDataByParams(value2.data, value1,this.searchData).totalItems;
      });

    });

  }


  setDataFromDataTransfer() {
    this.dataTransfer.store.subscribe(value => {

      this.searchData = value.searchedData;
      this.cardList = value.data;


    });

  }

}

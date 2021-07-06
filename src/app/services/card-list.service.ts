import {Injectable} from '@angular/core';
import {CardItemInterface} from "../interfaces/card-item-interface";

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor() {
  }

  sortDataByParams(cardList: CardItemInterface[], sortType: any, searchedData: string): { cardList: CardItemInterface[], totalItems: number } {

    cardList = this.searchFilter(cardList, searchedData).cardList

    if (sortType.sortType === 'trending') {

        cardList = [...cardList].sort((a, b) => {

          if (a.room.eventAmount > b.room.eventAmount) {
            return -1;
          }

          if (a.room.eventAmount < b.room.eventAmount) {

            return 1;
          }
          return 0;
        });

    }

    if (sortType.sortType === 'controversial') {


        cardList = [...cardList].sort((a, b) => {

          if (a.controversial > b.controversial) {
            return -1;
          }

          if (a.controversial < b.controversial) {

            return 1;
          }
          return 0;
        });

    }

    if (sortType.sortType === 'following') {

        cardList = [...cardList].filter(value => value.finalAnswer !== null);

    }

    return {cardList, totalItems: cardList.length}
  }

  searchFilter(value: CardItemInterface[], searchedData: string): { cardList: CardItemInterface[], totalItems: number } {


    const cardList = value.filter(value1 => {
      return value1.question.toLocaleLowerCase().includes(searchedData.toLocaleLowerCase());
    });

    const totalItems = cardList.length;

    return {cardList, totalItems}
  }
}

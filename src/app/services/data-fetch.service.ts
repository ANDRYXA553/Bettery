import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CardItemInterface} from "../interfaces/card-item-interface";

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  url = 'https://apitest.bettery.io/publicEvents/get_all_for_test';

  constructor(private httpClient: HttpClient) {

  }

  getData(): Observable<CardItemInterface[]> {
    return this.httpClient.get<CardItemInterface[]>(this.url).pipe(map((value: CardItemInterface[]) => {
      return value.filter((obj: CardItemInterface) => {
        if (!(obj.answerAmount > 1 && obj.host.avatat)) {
          return;
        }
        return this.addControversyProp(obj);
      })
    }))
  }

  addControversyProp(obj: CardItemInterface) {
    let betOutCome: any = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}
    obj.parcipiantAnswers.forEach(value => {
      if (betOutCome.hasOwnProperty(value.answer)) {
        betOutCome[value.answer] += 1
      }
    })
    let sorted: any = []
    for (const betOutComeKey in betOutCome) {
      if (betOutCome.hasOwnProperty(betOutComeKey)) {
        sorted.push(betOutCome[betOutComeKey])
      }
    }
    sorted = sorted.sort().reverse().slice(0, 2)
    obj.betOutCome = sorted
    obj.controversial = +(1 - (((betOutCome[0]) / obj.answerAmount) + ((betOutCome[1]) / obj.answerAmount))).toFixed(2)
    return obj
  }
}

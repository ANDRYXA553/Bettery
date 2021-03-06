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
    return this.httpClient.get<CardItemInterface[]>(this.url)
      .pipe(map((value: CardItemInterface[]) => value.filter((obj: CardItemInterface) => {

          if (!(obj.answerAmount > 1 && obj.host.avatat)) {
            return;
          }
          return this.addControversyProp(obj);
        })
      ));
  }

  addControversyProp(obj: CardItemInterface) {

    let betOutCome: any = {};

    obj.parcipiantAnswers.forEach(value => {
      (betOutCome.hasOwnProperty(value.answer)) ? betOutCome[value.answer] += 1 : betOutCome[value.answer] = 1;
    });

    let firstTwoPopularAnswers: any = [];

    for (const betOutComeKey in betOutCome) {
      if (betOutCome.hasOwnProperty(betOutComeKey)) {
        firstTwoPopularAnswers.push(betOutCome[betOutComeKey]);
      }
    }

    firstTwoPopularAnswers = firstTwoPopularAnswers.sort().reverse().slice(0, 2);

    obj.betOutCome = firstTwoPopularAnswers;

    const firstPlace = obj.betOutCome[0];
    const secondPlace = obj.betOutCome[1];

    this.controversialCalculator(firstPlace, secondPlace, obj);

    this.avgBetCalculator(obj);

    return obj;
  }


  controversialCalculator(firstPlace: number, secondPlace: number, obj: CardItemInterface) {

    obj.controversial = +(1 - ((firstPlace / obj.answerAmount) + ((secondPlace || 0) / obj.answerAmount))).toFixed(2);

  }

  avgBetCalculator(obj: CardItemInterface) {
    let sumPaY = 0

    obj.parcipiantAnswers.forEach(obj => {
      sumPaY += obj.payToken
    })
    obj.avgBet = +(sumPaY / obj.parcipiantAnswers.length).toFixed(2);
  };
}

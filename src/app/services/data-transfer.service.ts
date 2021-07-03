import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardItemInterface} from "../interfaces/card-item-interface";
import {DataFetchService} from "./data-fetch.service";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  dataModel: CardItemInterface[] = [
    {
      answerAmount: 2,
      answers: [
        "Bad",
        "Good",
        "Ww"],
      host: {
        avatat: "https://cdn.auth0.com/avatars/al.png",
        id: 351843720888408,
        nickName: "Alexjump1000"
      },
      endTime: 1624954800,
      eventEnd:1622539692,
      finalAnswer:null,
      question: "fiona iss testing",
      id: 562949953421549,
      startTime: 1624953415,
      room: {eventAmount: 1},
      parcipiantAnswers: [{
        amount: 1,
        answer: 1,
        date: 1,
        userId: 1,
        payToken: 0
      }],
      thumImage: "undefined",
      controversial:0,
      betOutCome:{}
    }]

  constructor(private dataFetchService:DataFetchService) {
  // this.dataFetchService.getData().subscribe(value => {
  //   this.store.next({data:value,searchedData:""})
  // })
  }

  store = new BehaviorSubject<{ data: CardItemInterface[] | [], searchedData: string }>({
      data: [],
      searchedData: ""
    }
  )
}

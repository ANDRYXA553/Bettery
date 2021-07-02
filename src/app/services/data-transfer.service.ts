import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardItemInterface} from "../interfaces/card-item-interface";

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
      question: "fiona iss testing",
      id: 562949953421549,
      startTime: 1624953415,
      room: {eventAmount: 1},
      parcipiantAnswers: [{
        amount: 1,
        answer: 1,
        date: 1,
        userId: 1,
        payToken:0
      }],
      thumImage: "undefined"
    }]

  constructor() {
  }

  store = new BehaviorSubject<CardItemInterface[]>(this.dataModel)
}

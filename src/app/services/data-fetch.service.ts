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
      return value.filter((value: CardItemInterface) => value.answerAmount > 1 && value.host.avatat )
    }))
  }
}
